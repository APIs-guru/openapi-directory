from dataclasses import dataclass, field



@dataclass
class DeleteRealmRolesRoleNamePathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    role_name: str = field(metadata={'path_param': { 'field_name': 'role-name', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmRolesRoleNameRequest:
    path_params: DeleteRealmRolesRoleNamePathParams = field()
    

@dataclass
class DeleteRealmRolesRoleNameResponse:
    content_type: str = field()
    status_code: int = field()
    
