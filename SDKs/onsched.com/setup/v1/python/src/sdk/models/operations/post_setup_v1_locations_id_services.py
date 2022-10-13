from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PostSetupV1LocationsIDServicesPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostSetupV1LocationsIDServicesRequests:
    strings: Optional[List[str]] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    strings1: Optional[List[str]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    strings2: Optional[List[str]] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    strings3: Optional[List[str]] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostSetupV1LocationsIDServicesRequest:
    path_params: PostSetupV1LocationsIDServicesPathParams = field(default=None)
    request: Optional[PostSetupV1LocationsIDServicesRequests] = field(default=None)
    

@dataclass
class PostSetupV1LocationsIDServicesResponse:
    content_type: str = field(default=None)
    location_view_model: Optional[shared.LocationViewModel] = field(default=None)
    status_code: int = field(default=None)
    
