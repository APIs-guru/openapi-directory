from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutRealmIdentityProviderInstancesAliasManagementPermissionsPathParams:
    alias: str = field(metadata={'path_param': { 'field_name': 'alias', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmIdentityProviderInstancesAliasManagementPermissionsRequest:
    path_params: PutRealmIdentityProviderInstancesAliasManagementPermissionsPathParams = field()
    request: shared.ManagementPermissionReference = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutRealmIdentityProviderInstancesAliasManagementPermissionsResponse:
    content_type: str = field()
    status_code: int = field()
    management_permission_reference: Optional[shared.ManagementPermissionReference] = field(default=None)
    
