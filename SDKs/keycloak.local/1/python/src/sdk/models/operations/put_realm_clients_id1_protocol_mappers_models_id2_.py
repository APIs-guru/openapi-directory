from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PutRealmClientsId1ProtocolMappersModelsId2PathParams:
    id1: str = field(metadata={'path_param': { 'field_name': 'id1', 'style': 'simple', 'explode': False }})
    id2: str = field(metadata={'path_param': { 'field_name': 'id2', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmClientsId1ProtocolMappersModelsId2Request:
    path_params: PutRealmClientsId1ProtocolMappersModelsId2PathParams = field()
    request: shared.ProtocolMapperRepresentation = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutRealmClientsId1ProtocolMappersModelsId2Response:
    content_type: str = field()
    status_code: int = field()
    
