from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutSetupV1ResourcesIDRecoverPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSetupV1ResourcesIDRecoverQueryParams:
    google_auth_return_url: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'googleAuthReturnUrl', 'style': 'form', 'explode': True }})
    outlook_auth_return_url: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'outlookAuthReturnUrl', 'style': 'form', 'explode': True }})
    

@dataclass
class PutSetupV1ResourcesIDRecoverRequest:
    path_params: PutSetupV1ResourcesIDRecoverPathParams = field(default=None)
    query_params: PutSetupV1ResourcesIDRecoverQueryParams = field(default=None)
    

@dataclass
class PutSetupV1ResourcesIDRecoverResponse:
    content_type: str = field(default=None)
    resource_view_model: Optional[shared.ResourceViewModel] = field(default=None)
    status_code: int = field(default=None)
    
