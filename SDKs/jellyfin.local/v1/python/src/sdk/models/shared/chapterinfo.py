from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ChapterInfo:
    image_date_modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageDateModified', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    image_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImagePath' }})
    image_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageTag' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    start_position_ticks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartPositionTicks' }})
    
