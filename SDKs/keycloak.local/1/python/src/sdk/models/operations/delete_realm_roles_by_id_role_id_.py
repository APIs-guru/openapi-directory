from dataclasses import dataclass, field



@dataclass
class DeleteRealmRolesByIDRoleIDPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    role_id: str = field(metadata={'path_param': { 'field_name': 'role-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmRolesByIDRoleIDRequest:
    path_params: DeleteRealmRolesByIDRoleIDPathParams = field()
    

@dataclass
class DeleteRealmRolesByIDRoleIDResponse:
    content_type: str = field()
    status_code: int = field()
    
