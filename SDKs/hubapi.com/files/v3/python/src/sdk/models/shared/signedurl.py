from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SignedURL:
    expires_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiresAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    extension: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extension' }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    size: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    
