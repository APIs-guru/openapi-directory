from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetArtistByNamePathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetArtistByNameQueryParams:
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetArtistByNameSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetArtistByNameRequest:
    path_params: GetArtistByNamePathParams = field()
    query_params: GetArtistByNameQueryParams = field()
    security: GetArtistByNameSecurity = field()
    

@dataclass
class GetArtistByNameResponse:
    content_type: str = field()
    status_code: int = field()
    base_item_dto: Optional[shared.BaseItemDto] = field(default=None)
    
