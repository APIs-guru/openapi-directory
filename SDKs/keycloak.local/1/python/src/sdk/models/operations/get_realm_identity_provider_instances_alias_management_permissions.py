from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRealmIdentityProviderInstancesAliasManagementPermissionsPathParams:
    alias: str = field(metadata={'path_param': { 'field_name': 'alias', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmIdentityProviderInstancesAliasManagementPermissionsRequest:
    path_params: GetRealmIdentityProviderInstancesAliasManagementPermissionsPathParams = field()
    

@dataclass
class GetRealmIdentityProviderInstancesAliasManagementPermissionsResponse:
    content_type: str = field()
    status_code: int = field()
    management_permission_reference: Optional[shared.ManagementPermissionReference] = field(default=None)
    
