from dataclasses import dataclass, field



@dataclass
class DeleteRealmUsersIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmUsersIDRequest:
    path_params: DeleteRealmUsersIDPathParams = field()
    

@dataclass
class DeleteRealmUsersIDResponse:
    content_type: str = field()
    status_code: int = field()
    
