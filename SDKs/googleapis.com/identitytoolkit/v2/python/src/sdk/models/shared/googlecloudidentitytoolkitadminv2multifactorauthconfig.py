from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigEnabledProvidersEnum(str, Enum):
    PROVIDER_UNSPECIFIED = "PROVIDER_UNSPECIFIED"
    PHONE_SMS = "PHONE_SMS"

class GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    DISABLED = "DISABLED"
    ENABLED = "ENABLED"
    MANDATORY = "MANDATORY"


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig:
    enabled_providers: Optional[List[GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigEnabledProvidersEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabledProviders' }})
    state: Optional[GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
