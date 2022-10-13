from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetArtistByNamePathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetArtistByNameQueryParams:
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetArtistByNameSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetArtistByNameRequest:
    path_params: GetArtistByNamePathParams = field(default=None)
    query_params: GetArtistByNameQueryParams = field(default=None)
    security: GetArtistByNameSecurity = field(default=None)
    

@dataclass
class GetArtistByNameResponse:
    base_item_dto: Optional[shared.BaseItemDto] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
