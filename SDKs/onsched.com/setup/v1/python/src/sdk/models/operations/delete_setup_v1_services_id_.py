from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteSetupV1ServicesIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSetupV1ServicesIDRequest:
    path_params: DeleteSetupV1ServicesIDPathParams = field(default=None)
    

@dataclass
class DeleteSetupV1ServicesIDResponse:
    content_type: str = field(default=None)
    service_view_model: Optional[shared.ServiceViewModel] = field(default=None)
    status_code: int = field(default=None)
    
