from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSetupV1LocationsServicesIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetupV1LocationsServicesIDRequest:
    path_params: GetSetupV1LocationsServicesIDPathParams = field(default=None)
    

@dataclass
class GetSetupV1LocationsServicesIDResponse:
    business_service_view_model: Optional[shared.BusinessServiceViewModel] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
