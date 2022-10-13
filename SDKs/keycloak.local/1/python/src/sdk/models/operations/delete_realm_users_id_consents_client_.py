from dataclasses import dataclass, field



@dataclass
class DeleteRealmUsersIDConsentsClientPathParams:
    client: str = field(default=None, metadata={'path_param': { 'field_name': 'client', 'style': 'simple', 'explode': False }})
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmUsersIDConsentsClientRequest:
    path_params: DeleteRealmUsersIDConsentsClientPathParams = field(default=None)
    

@dataclass
class DeleteRealmUsersIDConsentsClientResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
