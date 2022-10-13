from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetLinodeConfigsPathParams:
    linode_id: int = field(default=None, metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLinodeConfigsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetLinodeConfigsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetLinodeConfigsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetLinodeConfigsSecurity:
    option1: Optional[GetLinodeConfigsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetLinodeConfigsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetLinodeConfigsRequest:
    path_params: GetLinodeConfigsPathParams = field(default=None)
    query_params: GetLinodeConfigsQueryParams = field(default=None)
    security: GetLinodeConfigsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetLinodeConfigs200ApplicationJSON:
    data: Optional[List[shared.LinodeConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass
class GetLinodeConfigsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_linode_configs_200_application_json_object: Optional[GetLinodeConfigs200ApplicationJSON] = field(default=None)
    
