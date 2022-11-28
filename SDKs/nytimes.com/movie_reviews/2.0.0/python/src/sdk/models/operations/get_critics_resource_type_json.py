from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetCriticsResourceTypeJSONPathParams:
    resource_type: str = field(metadata={'path_param': { 'field_name': 'resource-type', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetCriticsResourceTypeJSON200ApplicationJSON:
    copyright: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyright') }})
    num_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_results') }})
    results: Optional[List[shared.Critic]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class GetCriticsResourceTypeJSONRequest:
    path_params: GetCriticsResourceTypeJSONPathParams = field()
    

@dataclass
class GetCriticsResourceTypeJSONResponse:
    content_type: str = field()
    status_code: int = field()
    get_critics_resource_type_json_200_application_json_object: Optional[GetCriticsResourceTypeJSON200ApplicationJSON] = field(default=None)
    
