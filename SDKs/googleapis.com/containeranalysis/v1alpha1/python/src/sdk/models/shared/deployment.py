from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DeploymentPlatformEnum(str, Enum):
    PLATFORM_UNSPECIFIED = "PLATFORM_UNSPECIFIED"
    GKE = "GKE"
    FLEX = "FLEX"
    CUSTOM = "CUSTOM"


@dataclass_json
@dataclass
class Deployment:
    r"""Deployment
    The period during which some deployable was active in a runtime.
    """
    
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    config: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    deploy_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployTime') }})
    platform: Optional[DeploymentPlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    resource_uri: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceUri') }})
    undeploy_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('undeployTime') }})
    user_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userEmail') }})
    
