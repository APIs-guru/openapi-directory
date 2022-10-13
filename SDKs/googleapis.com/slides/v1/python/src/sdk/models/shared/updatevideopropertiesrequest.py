from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import videoproperties


@dataclass_json
@dataclass
class UpdateVideoPropertiesRequest:
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectId' }})
    video_properties: Optional[videoproperties.VideoProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoProperties' }})
    
