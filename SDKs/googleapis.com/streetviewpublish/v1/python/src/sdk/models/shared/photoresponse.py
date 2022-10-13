from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import photo
from . import status


@dataclass_json
@dataclass
class PhotoResponse:
    photo: Optional[photo.Photo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'photo' }})
    status: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
