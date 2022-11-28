from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudWebriskV1SearchHashesResponse:
    negative_expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negativeExpireTime') }})
    threats: Optional[List[GoogleCloudWebriskV1SearchHashesResponseThreatHash]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threats') }})
    
