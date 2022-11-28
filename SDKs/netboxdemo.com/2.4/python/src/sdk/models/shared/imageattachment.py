from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ImageAttachment:
    content_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_type') }})
    image_height: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_height') }})
    image_width: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_width') }})
    object_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('object_id') }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    

@dataclass_json
@dataclass
class ImageAttachmentInput:
    content_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_type') }})
    image_height: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_height') }})
    image_width: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_width') }})
    object_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('object_id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
