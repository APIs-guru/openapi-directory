from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SearchJobsRequestDiversificationLevelEnum(str, Enum):
    DIVERSIFICATION_LEVEL_UNSPECIFIED = "DIVERSIFICATION_LEVEL_UNSPECIFIED"
    DISABLED = "DISABLED"
    SIMPLE = "SIMPLE"

class SearchJobsRequestJobViewEnum(str, Enum):
    JOB_VIEW_UNSPECIFIED = "JOB_VIEW_UNSPECIFIED"
    JOB_VIEW_ID_ONLY = "JOB_VIEW_ID_ONLY"
    JOB_VIEW_MINIMAL = "JOB_VIEW_MINIMAL"
    JOB_VIEW_SMALL = "JOB_VIEW_SMALL"
    JOB_VIEW_FULL = "JOB_VIEW_FULL"

class SearchJobsRequestSearchModeEnum(str, Enum):
    SEARCH_MODE_UNSPECIFIED = "SEARCH_MODE_UNSPECIFIED"
    JOB_SEARCH = "JOB_SEARCH"
    FEATURED_JOB_SEARCH = "FEATURED_JOB_SEARCH"


@dataclass_json
@dataclass
class SearchJobsRequest:
    r"""SearchJobsRequest
    Input only. The Request body of the `SearchJobs` call.
    """
    
    disable_keyword_match: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableKeywordMatch') }})
    diversification_level: Optional[SearchJobsRequestDiversificationLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diversificationLevel') }})
    enable_broadening: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableBroadening') }})
    histogram_facets: Optional[HistogramFacets] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('histogramFacets') }})
    job_query: Optional[JobQuery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobQuery') }})
    job_view: Optional[SearchJobsRequestJobViewEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobView') }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    order_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderBy') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize') }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageToken') }})
    request_metadata: Optional[RequestMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMetadata') }})
    require_precise_result_size: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requirePreciseResultSize') }})
    search_mode: Optional[SearchJobsRequestSearchModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchMode') }})
    
