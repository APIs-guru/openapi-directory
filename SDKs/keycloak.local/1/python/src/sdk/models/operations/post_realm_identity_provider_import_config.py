from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostRealmIdentityProviderImportConfigPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmIdentityProviderImportConfigRequest:
    path_params: PostRealmIdentityProviderImportConfigPathParams = field()
    

@dataclass
class PostRealmIdentityProviderImportConfigResponse:
    content_type: str = field()
    status_code: int = field()
    post_realm_identity_provider_import_config_2_xx_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
