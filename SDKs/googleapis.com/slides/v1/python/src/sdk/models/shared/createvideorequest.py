from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import pageelementproperties

class CreateVideoRequestSourceEnum(str, Enum):
    SOURCE_UNSPECIFIED = "SOURCE_UNSPECIFIED"
    YOUTUBE = "YOUTUBE"
    DRIVE = "DRIVE"


@dataclass_json
@dataclass
class CreateVideoRequest:
    element_properties: Optional[pageelementproperties.PageElementProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'elementProperties' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectId' }})
    source: Optional[CreateVideoRequestSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    
