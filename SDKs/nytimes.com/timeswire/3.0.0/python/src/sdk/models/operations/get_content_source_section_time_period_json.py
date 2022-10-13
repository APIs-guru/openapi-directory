from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class GetContentSourceSectionTimePeriodJSONSourceEnum(str, Enum):
    ALL = "all"
    NYT = "nyt"
    IHT = "iht"


@dataclass
class GetContentSourceSectionTimePeriodJSONPathParams:
    section: str = field(default=None, metadata={'path_param': { 'field_name': 'section', 'style': 'simple', 'explode': False }})
    source: GetContentSourceSectionTimePeriodJSONSourceEnum = field(default=None, metadata={'path_param': { 'field_name': 'source', 'style': 'simple', 'explode': False }})
    time_period: int = field(default=None, metadata={'path_param': { 'field_name': 'time-period', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetContentSourceSectionTimePeriodJSONQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetContentSourceSectionTimePeriodJSONRequest:
    path_params: GetContentSourceSectionTimePeriodJSONPathParams = field(default=None)
    query_params: GetContentSourceSectionTimePeriodJSONQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetContentSourceSectionTimePeriodJSON200ApplicationJSON:
    copyright: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyright' }})
    num_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_results' }})
    results: Optional[List[shared.Article]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class GetContentSourceSectionTimePeriodJSONResponse:
    content_type: str = field(default=None)
    get_content_source_section_time_period_json_200_application_json_object: Optional[GetContentSourceSectionTimePeriodJSON200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
