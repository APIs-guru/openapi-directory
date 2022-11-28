from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetMostemailedSectionTimePeriodJSONPathParams:
    section: shared.SectionEnum = field(metadata={'path_param': { 'field_name': 'section', 'style': 'simple', 'explode': False }})
    time_period: shared.TimePeriodEnum = field(metadata={'path_param': { 'field_name': 'time-period', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMostemailedSectionTimePeriodJSONSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass_json
@dataclass
class GetMostemailedSectionTimePeriodJSON200ApplicationJSON:
    copyright: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyright') }})
    num_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_results') }})
    results: Optional[List[shared.ArticleWithCountType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class GetMostemailedSectionTimePeriodJSON400ApplicationJSON:
    copyright: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyright') }})
    errors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    results: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class GetMostemailedSectionTimePeriodJSONRequest:
    path_params: GetMostemailedSectionTimePeriodJSONPathParams = field()
    security: GetMostemailedSectionTimePeriodJSONSecurity = field()
    

@dataclass
class GetMostemailedSectionTimePeriodJSONResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    get_mostemailed_section_time_period_json_200_application_json_object: Optional[GetMostemailedSectionTimePeriodJSON200ApplicationJSON] = field(default=None)
    get_mostemailed_section_time_period_json_400_application_json_object: Optional[GetMostemailedSectionTimePeriodJSON400ApplicationJSON] = field(default=None)
    get_mostemailed_section_time_period_json_403_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
