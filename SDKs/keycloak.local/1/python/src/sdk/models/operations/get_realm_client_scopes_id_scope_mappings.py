from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRealmClientScopesIDScopeMappingsPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmClientScopesIDScopeMappingsRequest:
    path_params: GetRealmClientScopesIDScopeMappingsPathParams = field(default=None)
    

@dataclass
class GetRealmClientScopesIDScopeMappingsResponse:
    content_type: str = field(default=None)
    mappings_representation: Optional[shared.MappingsRepresentation] = field(default=None)
    status_code: int = field(default=None)
    
