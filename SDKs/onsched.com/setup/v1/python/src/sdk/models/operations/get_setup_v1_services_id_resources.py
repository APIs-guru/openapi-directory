from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSetupV1ServicesIDResourcesPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetupV1ServicesIDResourcesQueryParams:
    google_auth_return_url: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'googleAuthReturnUrl', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    outlook_auth_return_url: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'outlookAuthReturnUrl', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSetupV1ServicesIDResourcesRequest:
    path_params: GetSetupV1ServicesIDResourcesPathParams = field(default=None)
    query_params: GetSetupV1ServicesIDResourcesQueryParams = field(default=None)
    

@dataclass
class GetSetupV1ServicesIDResourcesResponse:
    content_type: str = field(default=None)
    resource_list_view_model: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
