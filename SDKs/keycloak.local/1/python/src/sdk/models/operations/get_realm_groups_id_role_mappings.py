from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRealmGroupsIDRoleMappingsPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmGroupsIDRoleMappingsRequest:
    path_params: GetRealmGroupsIDRoleMappingsPathParams = field(default=None)
    

@dataclass
class GetRealmGroupsIDRoleMappingsResponse:
    content_type: str = field(default=None)
    mappings_representation: Optional[shared.MappingsRepresentation] = field(default=None)
    status_code: int = field(default=None)
    
