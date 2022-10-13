from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ImageAttachment:
    content_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content_type' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    image_height: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image_height' }})
    image_width: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image_width' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    object_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'object_id' }})
    parent: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    
