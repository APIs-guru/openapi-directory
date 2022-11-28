from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class IndexStatusInspectionResultCrawledAsEnum(str, Enum):
    CRAWLING_USER_AGENT_UNSPECIFIED = "CRAWLING_USER_AGENT_UNSPECIFIED"
    DESKTOP = "DESKTOP"
    MOBILE = "MOBILE"

class IndexStatusInspectionResultIndexingStateEnum(str, Enum):
    INDEXING_STATE_UNSPECIFIED = "INDEXING_STATE_UNSPECIFIED"
    INDEXING_ALLOWED = "INDEXING_ALLOWED"
    BLOCKED_BY_META_TAG = "BLOCKED_BY_META_TAG"
    BLOCKED_BY_HTTP_HEADER = "BLOCKED_BY_HTTP_HEADER"
    BLOCKED_BY_ROBOTS_TXT = "BLOCKED_BY_ROBOTS_TXT"

class IndexStatusInspectionResultPageFetchStateEnum(str, Enum):
    PAGE_FETCH_STATE_UNSPECIFIED = "PAGE_FETCH_STATE_UNSPECIFIED"
    SUCCESSFUL = "SUCCESSFUL"
    SOFT_404 = "SOFT_404"
    BLOCKED_ROBOTS_TXT = "BLOCKED_ROBOTS_TXT"
    NOT_FOUND = "NOT_FOUND"
    ACCESS_DENIED = "ACCESS_DENIED"
    SERVER_ERROR = "SERVER_ERROR"
    REDIRECT_ERROR = "REDIRECT_ERROR"
    ACCESS_FORBIDDEN = "ACCESS_FORBIDDEN"
    BLOCKED_4_XX = "BLOCKED_4XX"
    INTERNAL_CRAWL_ERROR = "INTERNAL_CRAWL_ERROR"
    INVALID_URL = "INVALID_URL"

class IndexStatusInspectionResultRobotsTxtStateEnum(str, Enum):
    ROBOTS_TXT_STATE_UNSPECIFIED = "ROBOTS_TXT_STATE_UNSPECIFIED"
    ALLOWED = "ALLOWED"
    DISALLOWED = "DISALLOWED"

class IndexStatusInspectionResultVerdictEnum(str, Enum):
    VERDICT_UNSPECIFIED = "VERDICT_UNSPECIFIED"
    PASS = "PASS"
    PARTIAL = "PARTIAL"
    FAIL = "FAIL"
    NEUTRAL = "NEUTRAL"


@dataclass_json
@dataclass
class IndexStatusInspectionResult:
    r"""IndexStatusInspectionResult
    Results of index status inspection for either the live page or the version in Google's index, depending on whether you requested a live inspection or not. For more information, see the [Index coverage report documentation](https://support.google.com/webmasters/answer/7440203).
    """
    
    coverage_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coverageState') }})
    crawled_as: Optional[IndexStatusInspectionResultCrawledAsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crawledAs') }})
    google_canonical: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleCanonical') }})
    indexing_state: Optional[IndexStatusInspectionResultIndexingStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indexingState') }})
    last_crawl_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastCrawlTime') }})
    page_fetch_state: Optional[IndexStatusInspectionResultPageFetchStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageFetchState') }})
    referring_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referringUrls') }})
    robots_txt_state: Optional[IndexStatusInspectionResultRobotsTxtStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('robotsTxtState') }})
    sitemap: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sitemap') }})
    user_canonical: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userCanonical') }})
    verdict: Optional[IndexStatusInspectionResultVerdictEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verdict') }})
    
