from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlesecuritysafebrowsingv4threatmatch


@dataclass_json
@dataclass
class GoogleSecuritySafebrowsingV4FindFullHashesResponse:
    matches: Optional[List[googlesecuritysafebrowsingv4threatmatch.GoogleSecuritySafebrowsingV4ThreatMatch]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matches' }})
    minimum_wait_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumWaitDuration' }})
    negative_cache_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'negativeCacheDuration' }})
    
