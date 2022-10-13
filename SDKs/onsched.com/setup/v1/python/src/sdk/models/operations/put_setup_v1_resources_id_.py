from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutSetupV1ResourcesIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSetupV1ResourcesIDQueryParams:
    google_auth_return_url: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'googleAuthReturnUrl', 'style': 'form', 'explode': True }})
    outlook_auth_return_url: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'outlookAuthReturnUrl', 'style': 'form', 'explode': True }})
    

@dataclass
class PutSetupV1ResourcesIDRequests:
    resource_update_model: Optional[shared.ResourceUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    resource_update_model1: Optional[shared.ResourceUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    resource_update_model2: Optional[shared.ResourceUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    resource_update_model3: Optional[shared.ResourceUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutSetupV1ResourcesIDRequest:
    path_params: PutSetupV1ResourcesIDPathParams = field(default=None)
    query_params: PutSetupV1ResourcesIDQueryParams = field(default=None)
    request: Optional[PutSetupV1ResourcesIDRequests] = field(default=None)
    

@dataclass
class PutSetupV1ResourcesIDResponse:
    content_type: str = field(default=None)
    resource_view_model: Optional[shared.ResourceViewModel] = field(default=None)
    status_code: int = field(default=None)
    
