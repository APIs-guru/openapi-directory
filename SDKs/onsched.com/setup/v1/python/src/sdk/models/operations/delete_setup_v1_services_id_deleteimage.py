from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteSetupV1ServicesIDDeleteimagePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSetupV1ServicesIDDeleteimageRequest:
    path_params: DeleteSetupV1ServicesIDDeleteimagePathParams = field()
    

@dataclass
class DeleteSetupV1ServicesIDDeleteimageResponse:
    content_type: str = field()
    status_code: int = field()
    service_view_model: Optional[shared.ServiceViewModel] = field(default=None)
    
