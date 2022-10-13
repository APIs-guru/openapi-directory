from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GooglePlayDeveloperReportingV1alpha1ErrorIssueTypeEnum(str, Enum):
    ERROR_TYPE_UNSPECIFIED = "ERROR_TYPE_UNSPECIFIED"
    APPLICATION_NOT_RESPONDING = "APPLICATION_NOT_RESPONDING"
    CRASH = "CRASH"


@dataclass_json
@dataclass
class GooglePlayDeveloperReportingV1alpha1ErrorIssue:
    cause: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cause' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: Optional[GooglePlayDeveloperReportingV1alpha1ErrorIssueTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
