from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import photo


@dataclass_json
@dataclass
class UpdatePhotoRequest:
    photo: Optional[photo.Photo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'photo' }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateMask' }})
    
