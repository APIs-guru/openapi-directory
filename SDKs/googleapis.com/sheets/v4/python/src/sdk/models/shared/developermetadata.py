from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import developermetadatalocation

class DeveloperMetadataVisibilityEnum(str, Enum):
    DEVELOPER_METADATA_VISIBILITY_UNSPECIFIED = "DEVELOPER_METADATA_VISIBILITY_UNSPECIFIED"
    DOCUMENT = "DOCUMENT"
    PROJECT = "PROJECT"


@dataclass_json
@dataclass
class DeveloperMetadata:
    location: Optional[developermetadatalocation.DeveloperMetadataLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    metadata_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadataId' }})
    metadata_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadataKey' }})
    metadata_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadataValue' }})
    visibility: Optional[DeveloperMetadataVisibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visibility' }})
    
