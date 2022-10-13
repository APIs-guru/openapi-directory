from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetCriticsResourceTypeJSONPathParams:
    resource_type: str = field(default=None, metadata={'path_param': { 'field_name': 'resource-type', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCriticsResourceTypeJSONRequest:
    path_params: GetCriticsResourceTypeJSONPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetCriticsResourceTypeJSON200ApplicationJSON:
    copyright: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyright' }})
    num_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_results' }})
    results: Optional[List[shared.Critic]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class GetCriticsResourceTypeJSONResponse:
    content_type: str = field(default=None)
    get_critics_resource_type_json_200_application_json_object: Optional[GetCriticsResourceTypeJSON200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
