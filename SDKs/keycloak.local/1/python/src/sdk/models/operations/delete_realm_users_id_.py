from dataclasses import dataclass, field



@dataclass
class DeleteRealmUsersIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmUsersIDRequest:
    path_params: DeleteRealmUsersIDPathParams = field(default=None)
    

@dataclass
class DeleteRealmUsersIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
