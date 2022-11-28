from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IdentityServiceAzureAdConfigInput:
    r"""IdentityServiceAzureAdConfigInput
    Configuration for the AzureAD Auth flow.
    """
    
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    client_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientSecret') }})
    kubectl_redirect_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kubectlRedirectUri') }})
    tenant: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenant') }})
    

@dataclass_json
@dataclass
class IdentityServiceAzureAdConfig:
    r"""IdentityServiceAzureAdConfig
    Configuration for the AzureAD Auth flow.
    """
    
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    client_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientSecret') }})
    encrypted_client_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptedClientSecret') }})
    kubectl_redirect_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kubectlRedirectUri') }})
    tenant: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenant') }})
    
