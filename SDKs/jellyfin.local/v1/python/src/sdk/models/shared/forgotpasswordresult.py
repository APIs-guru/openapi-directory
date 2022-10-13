from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import forgotpasswordaction_enum


@dataclass_json
@dataclass
class ForgotPasswordResult:
    action: Optional[forgotpasswordaction_enum.ForgotPasswordActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Action' }})
    pin_expiration_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PinExpirationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pin_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PinFile' }})
    
