from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteSetupV1CompaniesRegionsIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSetupV1CompaniesRegionsIDRequest:
    path_params: DeleteSetupV1CompaniesRegionsIDPathParams = field(default=None)
    

@dataclass
class DeleteSetupV1CompaniesRegionsIDResponse:
    content_type: str = field(default=None)
    region_view_model: Optional[shared.RegionViewModel] = field(default=None)
    status_code: int = field(default=None)
    
