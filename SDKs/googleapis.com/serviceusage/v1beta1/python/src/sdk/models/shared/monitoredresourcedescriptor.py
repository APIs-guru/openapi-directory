from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class MonitoredResourceDescriptorLaunchStageEnum(str, Enum):
    LAUNCH_STAGE_UNSPECIFIED = "LAUNCH_STAGE_UNSPECIFIED"
    UNIMPLEMENTED = "UNIMPLEMENTED"
    PRELAUNCH = "PRELAUNCH"
    EARLY_ACCESS = "EARLY_ACCESS"
    ALPHA = "ALPHA"
    BETA = "BETA"
    GA = "GA"
    DEPRECATED = "DEPRECATED"


@dataclass_json
@dataclass
class MonitoredResourceDescriptor:
    r"""MonitoredResourceDescriptor
    An object that describes the schema of a MonitoredResource object using a type name and a set of labels. For example, the monitored resource descriptor for Google Compute Engine VM instances has a type of `\"gce_instance\"` and specifies the use of the labels `\"instance_id\"` and `\"zone\"` to identify particular VM instances. Different APIs can support different monitored resource types. APIs generally provide a `list` method that returns the monitored resource descriptors used by the API. 
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    labels: Optional[List[LabelDescriptor]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    launch_stage: Optional[MonitoredResourceDescriptorLaunchStageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchStage') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
