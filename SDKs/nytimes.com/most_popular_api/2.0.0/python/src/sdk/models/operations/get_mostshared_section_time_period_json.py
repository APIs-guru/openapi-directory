from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetMostsharedSectionTimePeriodJSONPathParams:
    section: shared.SectionEnum = field(default=None, metadata={'path_param': { 'field_name': 'section', 'style': 'simple', 'explode': False }})
    time_period: shared.TimePeriodEnum = field(default=None, metadata={'path_param': { 'field_name': 'time-period', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMostsharedSectionTimePeriodJSONSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetMostsharedSectionTimePeriodJSONRequest:
    path_params: GetMostsharedSectionTimePeriodJSONPathParams = field(default=None)
    security: GetMostsharedSectionTimePeriodJSONSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetMostsharedSectionTimePeriodJSON200ApplicationJSON:
    copyright: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyright' }})
    num_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_results' }})
    results: Optional[List[shared.Article]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class GetMostsharedSectionTimePeriodJSON400ApplicationJSON:
    copyright: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyright' }})
    errors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    results: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class GetMostsharedSectionTimePeriodJSONResponse:
    content_type: str = field(default=None)
    get_mostshared_section_time_period_json_200_application_json_object: Optional[GetMostsharedSectionTimePeriodJSON200ApplicationJSON] = field(default=None)
    get_mostshared_section_time_period_json_400_application_json_object: Optional[GetMostsharedSectionTimePeriodJSON400ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
