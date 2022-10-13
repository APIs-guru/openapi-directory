from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import identityconfig
from . import kerberosconfig


@dataclass_json
@dataclass
class SecurityConfig:
    identity_config: Optional[identityconfig.IdentityConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identityConfig' }})
    kerberos_config: Optional[kerberosconfig.KerberosConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kerberosConfig' }})
    
