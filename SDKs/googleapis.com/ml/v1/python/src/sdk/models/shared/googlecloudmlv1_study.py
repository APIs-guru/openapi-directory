from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudMlV1StudyStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"
    COMPLETED = "COMPLETED"


@dataclass_json
@dataclass
class GoogleCloudMlV1Study:
    r"""GoogleCloudMlV1Study
    A message representing a Study.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    inactive_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inactiveReason') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[GoogleCloudMlV1StudyStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    study_config: Optional[GoogleCloudMlV1StudyConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('studyConfig') }})
    

@dataclass_json
@dataclass
class GoogleCloudMlV1StudyInput:
    r"""GoogleCloudMlV1StudyInput
    A message representing a Study.
    """
    
    study_config: Optional[GoogleCloudMlV1StudyConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('studyConfig') }})
    
