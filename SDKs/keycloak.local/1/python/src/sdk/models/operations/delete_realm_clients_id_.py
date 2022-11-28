from dataclasses import dataclass, field



@dataclass
class DeleteRealmClientsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmClientsIDRequest:
    path_params: DeleteRealmClientsIDPathParams = field()
    

@dataclass
class DeleteRealmClientsIDResponse:
    content_type: str = field()
    status_code: int = field()
    
