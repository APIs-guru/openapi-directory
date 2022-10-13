from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRealmIdentityProviderInstancesAliasManagementPermissionsPathParams:
    alias: str = field(default=None, metadata={'path_param': { 'field_name': 'alias', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmIdentityProviderInstancesAliasManagementPermissionsRequest:
    path_params: GetRealmIdentityProviderInstancesAliasManagementPermissionsPathParams = field(default=None)
    

@dataclass
class GetRealmIdentityProviderInstancesAliasManagementPermissionsResponse:
    content_type: str = field(default=None)
    management_permission_reference: Optional[shared.ManagementPermissionReference] = field(default=None)
    status_code: int = field(default=None)
    
