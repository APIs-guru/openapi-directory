from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRealmClientScopesId1ProtocolMappersModelsId2PathParams:
    id1: str = field(metadata={'path_param': { 'field_name': 'id1', 'style': 'simple', 'explode': False }})
    id2: str = field(metadata={'path_param': { 'field_name': 'id2', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmClientScopesId1ProtocolMappersModelsId2Request:
    path_params: GetRealmClientScopesId1ProtocolMappersModelsId2PathParams = field()
    

@dataclass
class GetRealmClientScopesId1ProtocolMappersModelsId2Response:
    content_type: str = field()
    status_code: int = field()
    protocol_mapper_representation: Optional[shared.ProtocolMapperRepresentation] = field(default=None)
    
