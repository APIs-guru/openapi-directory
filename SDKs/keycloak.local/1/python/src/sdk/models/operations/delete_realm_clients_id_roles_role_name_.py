from dataclasses import dataclass, field



@dataclass
class DeleteRealmClientsIDRolesRoleNamePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    role_name: str = field(metadata={'path_param': { 'field_name': 'role-name', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmClientsIDRolesRoleNameRequest:
    path_params: DeleteRealmClientsIDRolesRoleNamePathParams = field()
    

@dataclass
class DeleteRealmClientsIDRolesRoleNameResponse:
    content_type: str = field()
    status_code: int = field()
    
