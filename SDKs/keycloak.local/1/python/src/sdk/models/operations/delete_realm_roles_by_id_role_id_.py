from dataclasses import dataclass, field



@dataclass
class DeleteRealmRolesByIDRoleIDPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    role_id: str = field(default=None, metadata={'path_param': { 'field_name': 'role-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmRolesByIDRoleIDRequest:
    path_params: DeleteRealmRolesByIDRoleIDPathParams = field(default=None)
    

@dataclass
class DeleteRealmRolesByIDRoleIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
