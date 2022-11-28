from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSetupV1LocationsServicesIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetupV1LocationsServicesIDRequest:
    path_params: GetSetupV1LocationsServicesIDPathParams = field()
    

@dataclass
class GetSetupV1LocationsServicesIDResponse:
    content_type: str = field()
    status_code: int = field()
    business_service_view_model: Optional[shared.BusinessServiceViewModel] = field(default=None)
    
