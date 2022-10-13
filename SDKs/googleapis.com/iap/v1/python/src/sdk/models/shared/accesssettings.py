from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import alloweddomainssettings
from . import corssettings
from . import gcipsettings
from . import oauthsettings
from . import policydelegationsettings
from . import reauthsettings


@dataclass_json
@dataclass
class AccessSettings:
    allowed_domains_settings: Optional[alloweddomainssettings.AllowedDomainsSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedDomainsSettings' }})
    cors_settings: Optional[corssettings.CorsSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'corsSettings' }})
    gcip_settings: Optional[gcipsettings.GcipSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcipSettings' }})
    oauth_settings: Optional[oauthsettings.OAuthSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauthSettings' }})
    policy_delegation_settings: Optional[policydelegationsettings.PolicyDelegationSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyDelegationSettings' }})
    reauth_settings: Optional[reauthsettings.ReauthSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reauthSettings' }})
    
