from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class RunMobileFriendlyTestResponseMobileFriendlinessEnum(str, Enum):
    MOBILE_FRIENDLY_TEST_RESULT_UNSPECIFIED = "MOBILE_FRIENDLY_TEST_RESULT_UNSPECIFIED"
    MOBILE_FRIENDLY = "MOBILE_FRIENDLY"
    NOT_MOBILE_FRIENDLY = "NOT_MOBILE_FRIENDLY"


@dataclass_json
@dataclass
class RunMobileFriendlyTestResponse:
    r"""RunMobileFriendlyTestResponse
    Mobile-friendly test response, including mobile-friendly issues and resource issues.
    """
    
    mobile_friendliness: Optional[RunMobileFriendlyTestResponseMobileFriendlinessEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileFriendliness') }})
    mobile_friendly_issues: Optional[List[MobileFriendlyIssue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileFriendlyIssues') }})
    resource_issues: Optional[List[ResourceIssue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceIssues') }})
    screenshot: Optional[Image] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('screenshot') }})
    test_status: Optional[TestStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testStatus') }})
    
