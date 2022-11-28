from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRealmClientsIDScopeMappingsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmClientsIDScopeMappingsRequest:
    path_params: GetRealmClientsIDScopeMappingsPathParams = field()
    

@dataclass
class GetRealmClientsIDScopeMappingsResponse:
    content_type: str = field()
    status_code: int = field()
    mappings_representation: Optional[shared.MappingsRepresentation] = field(default=None)
    
