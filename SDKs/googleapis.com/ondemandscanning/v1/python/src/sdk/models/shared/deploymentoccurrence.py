from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class DeploymentOccurrencePlatformEnum(str, Enum):
    PLATFORM_UNSPECIFIED = "PLATFORM_UNSPECIFIED"
    GKE = "GKE"
    FLEX = "FLEX"
    CUSTOM = "CUSTOM"


@dataclass_json
@dataclass
class DeploymentOccurrence:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    config: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    deploy_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployTime' }})
    platform: Optional[DeploymentOccurrencePlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platform' }})
    resource_uri: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceUri' }})
    undeploy_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'undeployTime' }})
    user_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userEmail' }})
    
