from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSetupV1ResourcesIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetupV1ResourcesIDQueryParams:
    google_auth_return_url: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'googleAuthReturnUrl', 'style': 'form', 'explode': True }})
    outlook_auth_return_url: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'outlookAuthReturnUrl', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSetupV1ResourcesIDRequest:
    path_params: GetSetupV1ResourcesIDPathParams = field()
    query_params: GetSetupV1ResourcesIDQueryParams = field()
    

@dataclass
class GetSetupV1ResourcesIDResponse:
    content_type: str = field()
    status_code: int = field()
    resource_view_model: Optional[shared.ResourceViewModel] = field(default=None)
    
