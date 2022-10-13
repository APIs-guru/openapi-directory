from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class IPReputationReputationEnum(str, Enum):
    REPUTATION_CATEGORY_UNSPECIFIED = "REPUTATION_CATEGORY_UNSPECIFIED"
    HIGH = "HIGH"
    MEDIUM = "MEDIUM"
    LOW = "LOW"
    BAD = "BAD"


@dataclass_json
@dataclass
class IPReputation:
    ip_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipCount' }})
    num_ips: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numIps' }})
    reputation: Optional[IPReputationReputationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reputation' }})
    sample_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampleIps' }})
    
