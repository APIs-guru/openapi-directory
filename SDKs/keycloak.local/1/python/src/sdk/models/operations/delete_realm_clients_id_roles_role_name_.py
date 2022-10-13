from dataclasses import dataclass, field



@dataclass
class DeleteRealmClientsIDRolesRoleNamePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    role_name: str = field(default=None, metadata={'path_param': { 'field_name': 'role-name', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmClientsIDRolesRoleNameRequest:
    path_params: DeleteRealmClientsIDRolesRoleNamePathParams = field(default=None)
    

@dataclass
class DeleteRealmClientsIDRolesRoleNameResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
