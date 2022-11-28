from dataclasses import dataclass, field



@dataclass
class DeleteRealmClientScopesId1ProtocolMappersModelsId2PathParams:
    id1: str = field(metadata={'path_param': { 'field_name': 'id1', 'style': 'simple', 'explode': False }})
    id2: str = field(metadata={'path_param': { 'field_name': 'id2', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmClientScopesId1ProtocolMappersModelsId2Request:
    path_params: DeleteRealmClientScopesId1ProtocolMappersModelsId2PathParams = field()
    

@dataclass
class DeleteRealmClientScopesId1ProtocolMappersModelsId2Response:
    content_type: str = field()
    status_code: int = field()
    
