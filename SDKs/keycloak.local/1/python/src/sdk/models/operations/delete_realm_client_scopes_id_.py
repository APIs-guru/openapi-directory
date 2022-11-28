from dataclasses import dataclass, field



@dataclass
class DeleteRealmClientScopesIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmClientScopesIDRequest:
    path_params: DeleteRealmClientScopesIDPathParams = field()
    

@dataclass
class DeleteRealmClientScopesIDResponse:
    content_type: str = field()
    status_code: int = field()
    
