from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class VersionTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    TYPE_PREVIEW = "TYPE_PREVIEW"
    TYPE_GENERAL_AVAILABILITY = "TYPE_GENERAL_AVAILABILITY"


@dataclass_json
@dataclass
class Version:
    available_features: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableFeatures' }})
    default_version: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultVersion' }})
    type: Optional[VersionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    version_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionNumber' }})
    
