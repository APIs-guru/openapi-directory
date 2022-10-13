from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutSetupV1ServicesIDRecoverPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSetupV1ServicesIDRecoverRequest:
    path_params: PutSetupV1ServicesIDRecoverPathParams = field(default=None)
    

@dataclass
class PutSetupV1ServicesIDRecoverResponse:
    content_type: str = field(default=None)
    service_view_model: Optional[shared.ServiceViewModel] = field(default=None)
    status_code: int = field(default=None)
    
