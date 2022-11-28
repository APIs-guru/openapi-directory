from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudWebriskV1SubmissionThreatTypesEnum(str, Enum):
    THREAT_TYPE_UNSPECIFIED = "THREAT_TYPE_UNSPECIFIED"
    MALWARE = "MALWARE"
    SOCIAL_ENGINEERING = "SOCIAL_ENGINEERING"
    UNWANTED_SOFTWARE = "UNWANTED_SOFTWARE"
    SOCIAL_ENGINEERING_EXTENDED_COVERAGE = "SOCIAL_ENGINEERING_EXTENDED_COVERAGE"


@dataclass_json
@dataclass
class GoogleCloudWebriskV1Submission:
    r"""GoogleCloudWebriskV1Submission
    Wraps a URI that might be displaying malicious content.
    """
    
    threat_types: Optional[List[GoogleCloudWebriskV1SubmissionThreatTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threatTypes') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
