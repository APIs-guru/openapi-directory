from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutSetupV1ServicesIDRecoverPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSetupV1ServicesIDRecoverRequest:
    path_params: PutSetupV1ServicesIDRecoverPathParams = field()
    

@dataclass
class PutSetupV1ServicesIDRecoverResponse:
    content_type: str = field()
    status_code: int = field()
    service_view_model: Optional[shared.ServiceViewModel] = field(default=None)
    
