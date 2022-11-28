from dataclasses import dataclass, field



@dataclass
class DeleteRealmClientsInitialAccessIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmClientsInitialAccessIDRequest:
    path_params: DeleteRealmClientsInitialAccessIDPathParams = field()
    

@dataclass
class DeleteRealmClientsInitialAccessIDResponse:
    content_type: str = field()
    status_code: int = field()
    
