from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GooglePlayDeveloperReportingV1alpha1ErrorIssueTypeEnum(str, Enum):
    ERROR_TYPE_UNSPECIFIED = "ERROR_TYPE_UNSPECIFIED"
    APPLICATION_NOT_RESPONDING = "APPLICATION_NOT_RESPONDING"
    CRASH = "CRASH"


@dataclass_json
@dataclass
class GooglePlayDeveloperReportingV1alpha1ErrorIssue:
    r"""GooglePlayDeveloperReportingV1alpha1ErrorIssue
    A group of related ErrorReports received for an app. Similar error reports are grouped together into issues with a likely identical root cause. **Please note:** this resource is currently in Alpha. There could be changes to the issue grouping that would result in similar but more recent error reports being assigned to different issues. This could also cause some issues disappearing entirely and being replaced by new ones. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app.
    """
    
    cause: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cause') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[GooglePlayDeveloperReportingV1alpha1ErrorIssueTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
