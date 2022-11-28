from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""NotificationChannelDescriptor
    A description of a notification channel. The descriptor includes the properties of the channel and the set of labels or fields that must be specified to configure channels of a given type.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    labels: Optional[List[LabelDescriptor]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    launch_stage: Optional[NotificationChannelDescriptorLaunchStageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchStage') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    supported_tiers: Optional[List[NotificationChannelDescriptorSupportedTiersEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportedTiers') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
