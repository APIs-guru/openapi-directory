from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostSetupV1ResourcesQueryParams:
    google_auth_return_url: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'googleAuthReturnUrl', 'style': 'form', 'explode': True }})
    outlook_auth_return_url: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'outlookAuthReturnUrl', 'style': 'form', 'explode': True }})
    

@dataclass
class PostSetupV1ResourcesRequests:
    resource_input_model: Optional[shared.ResourceInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    resource_input_model1: Optional[shared.ResourceInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    resource_input_model2: Optional[shared.ResourceInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    resource_input_model3: Optional[shared.ResourceInputModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostSetupV1ResourcesRequest:
    query_params: PostSetupV1ResourcesQueryParams = field(default=None)
    request: Optional[PostSetupV1ResourcesRequests] = field(default=None)
    

@dataclass
class PostSetupV1ResourcesResponse:
    content_type: str = field(default=None)
    resource_view_model: Optional[shared.ResourceViewModel] = field(default=None)
    status_code: int = field(default=None)
    
