from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import mobilefriendlyissue
from . import resourceissue
from . import image
from . import teststatus

class RunMobileFriendlyTestResponseMobileFriendlinessEnum(str, Enum):
    MOBILE_FRIENDLY_TEST_RESULT_UNSPECIFIED = "MOBILE_FRIENDLY_TEST_RESULT_UNSPECIFIED"
    MOBILE_FRIENDLY = "MOBILE_FRIENDLY"
    NOT_MOBILE_FRIENDLY = "NOT_MOBILE_FRIENDLY"


@dataclass_json
@dataclass
class RunMobileFriendlyTestResponse:
    mobile_friendliness: Optional[RunMobileFriendlyTestResponseMobileFriendlinessEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobileFriendliness' }})
    mobile_friendly_issues: Optional[List[mobilefriendlyissue.MobileFriendlyIssue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobileFriendlyIssues' }})
    resource_issues: Optional[List[resourceissue.ResourceIssue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceIssues' }})
    screenshot: Optional[image.Image] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'screenshot' }})
    test_status: Optional[teststatus.TestStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testStatus' }})
    
