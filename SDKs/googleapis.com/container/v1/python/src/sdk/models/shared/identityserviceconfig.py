from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IdentityServiceConfig:
    r"""IdentityServiceConfig
    IdentityServiceConfig is configuration for Identity Service which allows customers to use external identity providers with the K8S API
    """
    
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    
