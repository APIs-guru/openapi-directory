from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleSecuritySafebrowsingV4FindFullHashesResponse:
    matches: Optional[List[GoogleSecuritySafebrowsingV4ThreatMatch]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matches') }})
    minimum_wait_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumWaitDuration') }})
    negative_cache_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negativeCacheDuration') }})
    
