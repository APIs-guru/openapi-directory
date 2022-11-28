from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ImageRegionCreateEntry:
    height: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    image_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageId') }})
    left: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('left') }})
    tag_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagId') }})
    top: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('top') }})
    width: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
