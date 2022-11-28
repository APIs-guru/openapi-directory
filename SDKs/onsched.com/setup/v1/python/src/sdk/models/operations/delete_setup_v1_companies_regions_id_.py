from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteSetupV1CompaniesRegionsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSetupV1CompaniesRegionsIDRequest:
    path_params: DeleteSetupV1CompaniesRegionsIDPathParams = field()
    

@dataclass
class DeleteSetupV1CompaniesRegionsIDResponse:
    content_type: str = field()
    status_code: int = field()
    region_view_model: Optional[shared.RegionViewModel] = field(default=None)
    
