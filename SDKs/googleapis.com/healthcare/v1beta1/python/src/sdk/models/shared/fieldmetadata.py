from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class FieldMetadataActionEnum(str, Enum):
    ACTION_UNSPECIFIED = "ACTION_UNSPECIFIED"
    TRANSFORM = "TRANSFORM"
    INSPECT_AND_TRANSFORM = "INSPECT_AND_TRANSFORM"
    DO_NOT_TRANSFORM = "DO_NOT_TRANSFORM"


@dataclass_json
@dataclass
class FieldMetadata:
    action: Optional[FieldMetadataActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    paths: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paths' }})
    
