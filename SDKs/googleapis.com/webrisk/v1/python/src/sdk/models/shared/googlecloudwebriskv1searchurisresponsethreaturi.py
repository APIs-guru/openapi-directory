from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudWebriskV1SearchUrisResponseThreatURIThreatTypesEnum(str, Enum):
    THREAT_TYPE_UNSPECIFIED = "THREAT_TYPE_UNSPECIFIED"
    MALWARE = "MALWARE"
    SOCIAL_ENGINEERING = "SOCIAL_ENGINEERING"
    UNWANTED_SOFTWARE = "UNWANTED_SOFTWARE"
    SOCIAL_ENGINEERING_EXTENDED_COVERAGE = "SOCIAL_ENGINEERING_EXTENDED_COVERAGE"


@dataclass_json
@dataclass
class GoogleCloudWebriskV1SearchUrisResponseThreatURI:
    r"""GoogleCloudWebriskV1SearchUrisResponseThreatURI
    Contains threat information on a matching uri.
    """
    
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireTime') }})
    threat_types: Optional[List[GoogleCloudWebriskV1SearchUrisResponseThreatURIThreatTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threatTypes') }})
    
