from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetRealmUsersIDConfiguredUserStorageCredentialTypesPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmUsersIDConfiguredUserStorageCredentialTypesRequest:
    path_params: GetRealmUsersIDConfiguredUserStorageCredentialTypesPathParams = field(default=None)
    

@dataclass
class GetRealmUsersIDConfiguredUserStorageCredentialTypesResponse:
    content_type: str = field(default=None)
    get_realm_users_id_configured_user_storage_credential_types_2_xx_application_json_strings: Optional[List[str]] = field(default=None)
    status_code: int = field(default=None)
    
