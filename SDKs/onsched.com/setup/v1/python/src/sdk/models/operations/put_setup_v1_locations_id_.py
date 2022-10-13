from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutSetupV1LocationsIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSetupV1LocationsIDQueryParams:
    remove_region: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'removeRegion', 'style': 'form', 'explode': True }})
    

@dataclass
class PutSetupV1LocationsIDRequests:
    location_update_model: Optional[shared.LocationUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    location_update_model1: Optional[shared.LocationUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    location_update_model2: Optional[shared.LocationUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    location_update_model3: Optional[shared.LocationUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutSetupV1LocationsIDRequest:
    path_params: PutSetupV1LocationsIDPathParams = field(default=None)
    query_params: PutSetupV1LocationsIDQueryParams = field(default=None)
    request: Optional[PutSetupV1LocationsIDRequests] = field(default=None)
    

@dataclass
class PutSetupV1LocationsIDResponse:
    content_type: str = field(default=None)
    location_view_model: Optional[shared.LocationViewModel] = field(default=None)
    status_code: int = field(default=None)
    
