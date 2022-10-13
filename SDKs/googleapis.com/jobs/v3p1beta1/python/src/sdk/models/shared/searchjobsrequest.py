from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import customrankinginfo
from . import histogramfacets
from . import histogramquery
from . import jobquery
from . import requestmetadata

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
    custom_ranking_info: Optional[customrankinginfo.CustomRankingInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customRankingInfo' }})
    disable_keyword_match: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableKeywordMatch' }})
    diversification_level: Optional[SearchJobsRequestDiversificationLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diversificationLevel' }})
    enable_broadening: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableBroadening' }})
    histogram_facets: Optional[histogramfacets.HistogramFacets] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'histogramFacets' }})
    histogram_queries: Optional[List[histogramquery.HistogramQuery]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'histogramQueries' }})
    job_query: Optional[jobquery.JobQuery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobQuery' }})
    job_view: Optional[SearchJobsRequestJobViewEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobView' }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    order_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderBy' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageSize' }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageToken' }})
    request_metadata: Optional[requestmetadata.RequestMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestMetadata' }})
    require_precise_result_size: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requirePreciseResultSize' }})
    search_mode: Optional[SearchJobsRequestSearchModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchMode' }})
    
