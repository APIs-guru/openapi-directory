from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostSetupV1CompaniesRegionsRequests:
    region_input_model: Optional[shared.RegionInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    region_input_model1: Optional[shared.RegionInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    region_input_model2: Optional[shared.RegionInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    region_input_model3: Optional[shared.RegionInputModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostSetupV1CompaniesRegionsRequest:
    request: Optional[PostSetupV1CompaniesRegionsRequests] = field(default=None)
    

@dataclass
class PostSetupV1CompaniesRegionsResponse:
    content_type: str = field(default=None)
    region_view_model: Optional[shared.RegionViewModel] = field(default=None)
    status_code: int = field(default=None)
    
