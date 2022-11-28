from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DestinationNotCrawlableEvidenceReasonEnum(str, Enum):
    REASON_UNSPECIFIED = "REASON_UNSPECIFIED"
    UNREACHABLE_ROBOTS = "UNREACHABLE_ROBOTS"
    TIMEOUT_ROBOTS = "TIMEOUT_ROBOTS"
    ROBOTED_DENIED = "ROBOTED_DENIED"
    UNKNOWN = "UNKNOWN"


@dataclass_json
@dataclass
class DestinationNotCrawlableEvidence:
    r"""DestinationNotCrawlableEvidence
    Evidence that the creative's destination URL was not crawlable by Google.
    """
    
    crawl_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crawlTime') }})
    crawled_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crawledUrl') }})
    reason: Optional[DestinationNotCrawlableEvidenceReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    
