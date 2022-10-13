from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRealmClientsIDScopeMappingsPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmClientsIDScopeMappingsRequest:
    path_params: GetRealmClientsIDScopeMappingsPathParams = field(default=None)
    

@dataclass
class GetRealmClientsIDScopeMappingsResponse:
    content_type: str = field(default=None)
    mappings_representation: Optional[shared.MappingsRepresentation] = field(default=None)
    status_code: int = field(default=None)
    
