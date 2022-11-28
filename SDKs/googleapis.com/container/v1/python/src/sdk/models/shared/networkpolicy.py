from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class NetworkPolicyProviderEnum(str, Enum):
    PROVIDER_UNSPECIFIED = "PROVIDER_UNSPECIFIED"
    CALICO = "CALICO"


@dataclass_json
@dataclass
class NetworkPolicy:
    r"""NetworkPolicy
    Configuration options for the NetworkPolicy feature. https://kubernetes.io/docs/concepts/services-networking/networkpolicies/
    """
    
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    provider: Optional[NetworkPolicyProviderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    
