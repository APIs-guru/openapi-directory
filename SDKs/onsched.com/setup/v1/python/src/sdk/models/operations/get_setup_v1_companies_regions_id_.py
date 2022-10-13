from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSetupV1CompaniesRegionsIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetupV1CompaniesRegionsIDRequest:
    path_params: GetSetupV1CompaniesRegionsIDPathParams = field(default=None)
    

@dataclass
class GetSetupV1CompaniesRegionsIDResponse:
    content_type: str = field(default=None)
    region_view_model: Optional[shared.RegionViewModel] = field(default=None)
    status_code: int = field(default=None)
    
