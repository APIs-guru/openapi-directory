from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import issuancepolicy
from . import publishingoptions

class CaPoolTierEnum(str, Enum):
    TIER_UNSPECIFIED = "TIER_UNSPECIFIED"
    ENTERPRISE = "ENTERPRISE"
    DEVOPS = "DEVOPS"


@dataclass_json
@dataclass
class CaPool:
    issuance_policy: Optional[issuancepolicy.IssuancePolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issuancePolicy' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    publishing_options: Optional[publishingoptions.PublishingOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishingOptions' }})
    tier: Optional[CaPoolTierEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tier' }})
    
