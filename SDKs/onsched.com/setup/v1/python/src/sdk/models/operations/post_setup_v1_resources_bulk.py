from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class PostSetupV1ResourcesBulkQueryParams:
    google_auth_return_url: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'googleAuthReturnUrl', 'style': 'form', 'explode': True }})
    outlook_auth_return_url: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'outlookAuthReturnUrl', 'style': 'form', 'explode': True }})
    

@dataclass
class PostSetupV1ResourcesBulkRequests:
    resources_input_model: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    resources_input_model1: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    resources_input_model2: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    resources_input_model3: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostSetupV1ResourcesBulkRequest:
    query_params: PostSetupV1ResourcesBulkQueryParams = field(default=None)
    request: Optional[PostSetupV1ResourcesBulkRequests] = field(default=None)
    

@dataclass
class PostSetupV1ResourcesBulkResponse:
    content_type: str = field(default=None)
    resource_view_models: Optional[List[shared.ResourceViewModel]] = field(default=None)
    status_code: int = field(default=None)
    
