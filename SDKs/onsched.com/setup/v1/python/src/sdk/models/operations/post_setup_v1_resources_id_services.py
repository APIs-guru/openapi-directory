from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PostSetupV1ResourcesIDServicesPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostSetupV1ResourcesIDServicesRequests:
    strings: Optional[List[str]] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    strings1: Optional[List[str]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    strings2: Optional[List[str]] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    strings3: Optional[List[str]] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostSetupV1ResourcesIDServicesRequest:
    path_params: PostSetupV1ResourcesIDServicesPathParams = field(default=None)
    request: Optional[PostSetupV1ResourcesIDServicesRequests] = field(default=None)
    

@dataclass
class PostSetupV1ResourcesIDServicesResponse:
    content_type: str = field(default=None)
    resource_view_model: Optional[shared.ResourceViewModel] = field(default=None)
    status_code: int = field(default=None)
    
