from dataclasses import dataclass, field



@dataclass
class DeleteRealmUsersIDConsentsClientPathParams:
    client: str = field(metadata={'path_param': { 'field_name': 'client', 'style': 'simple', 'explode': False }})
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmUsersIDConsentsClientRequest:
    path_params: DeleteRealmUsersIDConsentsClientPathParams = field()
    

@dataclass
class DeleteRealmUsersIDConsentsClientResponse:
    content_type: str = field()
    status_code: int = field()
    
