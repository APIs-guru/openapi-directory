from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class IPReputationReputationEnum(str, Enum):
    REPUTATION_CATEGORY_UNSPECIFIED = "REPUTATION_CATEGORY_UNSPECIFIED"
    HIGH = "HIGH"
    MEDIUM = "MEDIUM"
    LOW = "LOW"
    BAD = "BAD"


@dataclass_json
@dataclass
class IPReputation:
    r"""IPReputation
    IP Reputation information for a set of IPs in a specific reputation category.
    """
    
    ip_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipCount') }})
    reputation: Optional[IPReputationReputationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reputation') }})
    sample_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleIps') }})
    
