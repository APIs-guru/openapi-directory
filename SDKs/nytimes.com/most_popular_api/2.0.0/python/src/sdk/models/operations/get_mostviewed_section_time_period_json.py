from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetMostviewedSectionTimePeriodJSONPathParams:
    section: shared.SectionEnum = field(metadata={'path_param': { 'field_name': 'section', 'style': 'simple', 'explode': False }})
    time_period: shared.TimePeriodEnum = field(metadata={'path_param': { 'field_name': 'time-period', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMostviewedSectionTimePeriodJSONSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass_json
@dataclass
class GetMostviewedSectionTimePeriodJSON200ApplicationJSON:
    copyright: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyright') }})
    num_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_results') }})
    results: Optional[List[shared.Article]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class GetMostviewedSectionTimePeriodJSONRequest:
    path_params: GetMostviewedSectionTimePeriodJSONPathParams = field()
    security: GetMostviewedSectionTimePeriodJSONSecurity = field()
    

@dataclass
class GetMostviewedSectionTimePeriodJSONResponse:
    content_type: str = field()
    status_code: int = field()
    get_mostviewed_section_time_period_json_200_application_json_object: Optional[GetMostviewedSectionTimePeriodJSON200ApplicationJSON] = field(default=None)
    
