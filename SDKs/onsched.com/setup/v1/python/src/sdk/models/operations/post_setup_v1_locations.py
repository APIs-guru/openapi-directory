from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostSetupV1LocationsRequests:
    location_input_model: Optional[shared.LocationInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    location_input_model1: Optional[shared.LocationInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    location_input_model2: Optional[shared.LocationInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    location_input_model3: Optional[shared.LocationInputModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostSetupV1LocationsRequest:
    request: Optional[PostSetupV1LocationsRequests] = field(default=None)
    

@dataclass
class PostSetupV1LocationsResponse:
    content_type: str = field()
    status_code: int = field()
    location_view_model: Optional[shared.LocationViewModel] = field(default=None)
    
