from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import labeldescriptor

class NotificationChannelDescriptorLaunchStageEnum(str, Enum):
    LAUNCH_STAGE_UNSPECIFIED = "LAUNCH_STAGE_UNSPECIFIED"
    UNIMPLEMENTED = "UNIMPLEMENTED"
    PRELAUNCH = "PRELAUNCH"
    EARLY_ACCESS = "EARLY_ACCESS"
    ALPHA = "ALPHA"
    BETA = "BETA"
    GA = "GA"
    DEPRECATED = "DEPRECATED"

class NotificationChannelDescriptorSupportedTiersEnum(str, Enum):
    SERVICE_TIER_UNSPECIFIED = "SERVICE_TIER_UNSPECIFIED"
    SERVICE_TIER_BASIC = "SERVICE_TIER_BASIC"
    SERVICE_TIER_PREMIUM = "SERVICE_TIER_PREMIUM"


@dataclass_json
@dataclass
class NotificationChannelDescriptor:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    labels: Optional[List[labeldescriptor.LabelDescriptor]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    launch_stage: Optional[NotificationChannelDescriptorLaunchStageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchStage' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    supported_tiers: Optional[List[NotificationChannelDescriptorSupportedTiersEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportedTiers' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
