from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSetupV1ServicesIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetupV1ServicesIDRequest:
    path_params: GetSetupV1ServicesIDPathParams = field()
    

@dataclass
class GetSetupV1ServicesIDResponse:
    content_type: str = field()
    status_code: int = field()
    service_view_model: Optional[shared.ServiceViewModel] = field(default=None)
    
