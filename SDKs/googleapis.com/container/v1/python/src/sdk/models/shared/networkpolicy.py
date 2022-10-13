from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class NetworkPolicyProviderEnum(str, Enum):
    PROVIDER_UNSPECIFIED = "PROVIDER_UNSPECIFIED"
    CALICO = "CALICO"


@dataclass_json
@dataclass
class NetworkPolicy:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    provider: Optional[NetworkPolicyProviderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provider' }})
    
