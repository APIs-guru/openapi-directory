from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PaymentMethodData:
    card_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'card_type' }})
    expiry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiry' }})
    last_four: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_four' }})
    
class PaymentMethodTypeEnum(str, Enum):
    CREDIT_CARD = "credit_card"


@dataclass_json
@dataclass
class PaymentMethod:
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data: Optional[PaymentMethodData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    is_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_default' }})
    type: Optional[PaymentMethodTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
