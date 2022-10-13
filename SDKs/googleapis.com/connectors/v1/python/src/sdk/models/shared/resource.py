from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ResourceTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    GCP_PROJECT = "GCP_PROJECT"
    GCP_RESOURCE = "GCP_RESOURCE"
    GCP_SECRETMANAGER_SECRET = "GCP_SECRETMANAGER_SECRET"
    GCP_SECRETMANAGER_SECRET_VERSION = "GCP_SECRETMANAGER_SECRET_VERSION"


@dataclass_json
@dataclass
class Resource:
    path_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pathTemplate' }})
    type: Optional[ResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
