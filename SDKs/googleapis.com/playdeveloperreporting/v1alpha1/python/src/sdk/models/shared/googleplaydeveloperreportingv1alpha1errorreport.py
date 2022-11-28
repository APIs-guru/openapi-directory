from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GooglePlayDeveloperReportingV1alpha1ErrorReportTypeEnum(str, Enum):
    ERROR_TYPE_UNSPECIFIED = "ERROR_TYPE_UNSPECIFIED"
    APPLICATION_NOT_RESPONDING = "APPLICATION_NOT_RESPONDING"
    CRASH = "CRASH"


@dataclass_json
@dataclass
class GooglePlayDeveloperReportingV1alpha1ErrorReport:
    r"""GooglePlayDeveloperReportingV1alpha1ErrorReport
    An error report received for an app. There reports are produced by the Android platform code when a (potentially fatal) error condition is detected. Identical reports from many users will be deduplicated and coalesced into a single ErrorReport. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app.
    """
    
    issue: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issue') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    report_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportText') }})
    type: Optional[GooglePlayDeveloperReportingV1alpha1ErrorReportTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
