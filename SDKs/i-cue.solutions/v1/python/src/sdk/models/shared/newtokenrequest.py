from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NewTokenRequest:
    entity_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityToken' }})
    expiration_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expirationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    user_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userToken' }})
    
