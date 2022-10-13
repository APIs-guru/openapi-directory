from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DestinationNotCrawlableEvidenceReasonEnum(str, Enum):
    REASON_UNSPECIFIED = "REASON_UNSPECIFIED"
    UNREACHABLE_ROBOTS = "UNREACHABLE_ROBOTS"
    TIMEOUT_ROBOTS = "TIMEOUT_ROBOTS"
    ROBOTED_DENIED = "ROBOTED_DENIED"
    UNKNOWN = "UNKNOWN"


@dataclass_json
@dataclass
class DestinationNotCrawlableEvidence:
    crawl_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'crawlTime' }})
    crawled_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'crawledUrl' }})
    reason: Optional[DestinationNotCrawlableEvidenceReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    
