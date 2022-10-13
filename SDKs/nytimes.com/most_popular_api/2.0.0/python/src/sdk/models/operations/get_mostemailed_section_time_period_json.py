from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetMostemailedSectionTimePeriodJSONPathParams:
    section: shared.SectionEnum = field(default=None, metadata={'path_param': { 'field_name': 'section', 'style': 'simple', 'explode': False }})
    time_period: shared.TimePeriodEnum = field(default=None, metadata={'path_param': { 'field_name': 'time-period', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMostemailedSectionTimePeriodJSONSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetMostemailedSectionTimePeriodJSONRequest:
    path_params: GetMostemailedSectionTimePeriodJSONPathParams = field(default=None)
    security: GetMostemailedSectionTimePeriodJSONSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetMostemailedSectionTimePeriodJSON200ApplicationJSON:
    copyright: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyright' }})
    num_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_results' }})
    results: Optional[List[shared.ArticleWithCountType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class GetMostemailedSectionTimePeriodJSON400ApplicationJSON:
    copyright: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyright' }})
    errors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    results: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class GetMostemailedSectionTimePeriodJSONResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    get_mostemailed_section_time_period_json_200_application_json_object: Optional[GetMostemailedSectionTimePeriodJSON200ApplicationJSON] = field(default=None)
    get_mostemailed_section_time_period_json_400_application_json_object: Optional[GetMostemailedSectionTimePeriodJSON400ApplicationJSON] = field(default=None)
    get_mostemailed_section_time_period_json_403_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
