from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRealmClientsId1ProtocolMappersModelsId2PathParams:
    id1: str = field(default=None, metadata={'path_param': { 'field_name': 'id1', 'style': 'simple', 'explode': False }})
    id2: str = field(default=None, metadata={'path_param': { 'field_name': 'id2', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmClientsId1ProtocolMappersModelsId2Request:
    path_params: GetRealmClientsId1ProtocolMappersModelsId2PathParams = field(default=None)
    

@dataclass
class GetRealmClientsId1ProtocolMappersModelsId2Response:
    content_type: str = field(default=None)
    protocol_mapper_representation: Optional[shared.ProtocolMapperRepresentation] = field(default=None)
    status_code: int = field(default=None)
    
