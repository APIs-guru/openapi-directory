from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class InAppVoice:
    account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_id' }})
    callback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'callback_url' }})
    conversation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversation_id' }})
    date_end: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_end', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_start: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_start', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    include_subaccounts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'include_subaccounts' }})
    product: shared.ProductInAppVoiceEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    
