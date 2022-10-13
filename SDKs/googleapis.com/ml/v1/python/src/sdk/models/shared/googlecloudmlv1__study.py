from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googlecloudmlv1__studyconfig

class GoogleCloudMlV1StudyStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"
    COMPLETED = "COMPLETED"


@dataclass_json
@dataclass
class GoogleCloudMlV1Study:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    inactive_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inactiveReason' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state: Optional[GoogleCloudMlV1StudyStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    study_config: Optional[googlecloudmlv1__studyconfig.GoogleCloudMlV1StudyConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'studyConfig' }})
    
