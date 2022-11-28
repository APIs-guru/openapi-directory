from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PaymentMethodData:
    r"""PaymentMethodData
    Credit card information.
    """
    
    card_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('card_type') }})
    expiry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiry') }})
    last_four: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_four') }})
    
class PaymentMethodTypeEnum(str, Enum):
    CREDIT_CARD = "credit_card"


@dataclass_json
@dataclass
class PaymentMethod:
    r"""PaymentMethod
    Payment Method Response Object.
    """
    
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data: Optional[PaymentMethodData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    is_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_default') }})
    type: Optional[PaymentMethodTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
