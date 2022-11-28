from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRealmClientScopesIDScopeMappingsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmClientScopesIDScopeMappingsRequest:
    path_params: GetRealmClientScopesIDScopeMappingsPathParams = field()
    

@dataclass
class GetRealmClientScopesIDScopeMappingsResponse:
    content_type: str = field()
    status_code: int = field()
    mappings_representation: Optional[shared.MappingsRepresentation] = field(default=None)
    
