from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmClientsIDProtocolMappersModelsPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmClientsIDProtocolMappersModelsRequest:
    path_params: GetRealmClientsIDProtocolMappersModelsPathParams = field(default=None)
    

@dataclass
class GetRealmClientsIDProtocolMappersModelsResponse:
    content_type: str = field(default=None)
    protocol_mapper_representations: Optional[List[shared.ProtocolMapperRepresentation]] = field(default=None)
    status_code: int = field(default=None)
    
