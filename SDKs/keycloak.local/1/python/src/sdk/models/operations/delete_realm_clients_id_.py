from dataclasses import dataclass, field



@dataclass
class DeleteRealmClientsIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmClientsIDRequest:
    path_params: DeleteRealmClientsIDPathParams = field(default=None)
    

@dataclass
class DeleteRealmClientsIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
