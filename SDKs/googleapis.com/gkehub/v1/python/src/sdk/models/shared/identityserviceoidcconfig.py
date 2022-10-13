from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IdentityServiceOidcConfig:
    certificate_authority_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateAuthorityData' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientId' }})
    client_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientSecret' }})
    deploy_cloud_console_proxy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployCloudConsoleProxy' }})
    enable_access_token: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableAccessToken' }})
    encrypted_client_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptedClientSecret' }})
    extra_params: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extraParams' }})
    group_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupPrefix' }})
    groups_claim: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupsClaim' }})
    issuer_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issuerUri' }})
    kubectl_redirect_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kubectlRedirectUri' }})
    scopes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scopes' }})
    user_claim: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userClaim' }})
    user_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userPrefix' }})
    
