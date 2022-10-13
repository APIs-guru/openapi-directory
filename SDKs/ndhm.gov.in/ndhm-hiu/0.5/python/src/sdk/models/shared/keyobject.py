from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class KeyObject:
    expiry: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiry', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    key_value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyValue' }})
    parameters: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    
