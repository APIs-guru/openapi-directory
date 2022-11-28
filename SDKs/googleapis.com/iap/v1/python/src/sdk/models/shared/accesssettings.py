from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccessSettings:
    r"""AccessSettings
    Access related settings for IAP protected apps.
    """
    
    allowed_domains_settings: Optional[AllowedDomainsSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedDomainsSettings') }})
    cors_settings: Optional[CorsSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('corsSettings') }})
    gcip_settings: Optional[GcipSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcipSettings') }})
    oauth_settings: Optional[OAuthSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauthSettings') }})
    policy_delegation_settings: Optional[PolicyDelegationSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyDelegationSettings') }})
    reauth_settings: Optional[ReauthSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reauthSettings') }})
    
