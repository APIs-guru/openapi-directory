from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PutRealmClientScopesId1ProtocolMappersModelsId2PathParams:
    id1: str = field(default=None, metadata={'path_param': { 'field_name': 'id1', 'style': 'simple', 'explode': False }})
    id2: str = field(default=None, metadata={'path_param': { 'field_name': 'id2', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmClientScopesId1ProtocolMappersModelsId2Request:
    path_params: PutRealmClientScopesId1ProtocolMappersModelsId2PathParams = field(default=None)
    request: shared.ProtocolMapperRepresentation = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutRealmClientScopesId1ProtocolMappersModelsId2Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
