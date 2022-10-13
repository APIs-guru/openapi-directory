from dataclasses import dataclass, field



@dataclass
class DeleteRealmRolesRoleNamePathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    role_name: str = field(default=None, metadata={'path_param': { 'field_name': 'role-name', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmRolesRoleNameRequest:
    path_params: DeleteRealmRolesRoleNamePathParams = field(default=None)
    

@dataclass
class DeleteRealmRolesRoleNameResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
