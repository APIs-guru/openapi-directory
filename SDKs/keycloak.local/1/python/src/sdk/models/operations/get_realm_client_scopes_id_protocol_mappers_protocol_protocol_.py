from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmClientScopesIDProtocolMappersProtocolProtocolPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    protocol: str = field(metadata={'path_param': { 'field_name': 'protocol', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmClientScopesIDProtocolMappersProtocolProtocolRequest:
    path_params: GetRealmClientScopesIDProtocolMappersProtocolProtocolPathParams = field()
    

@dataclass
class GetRealmClientScopesIDProtocolMappersProtocolProtocolResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_mapper_representations: Optional[List[shared.ProtocolMapperRepresentation]] = field(default=None)
    
