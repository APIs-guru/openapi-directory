from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GrpcRouteFaultInjectionPolicyDelay:
    fixed_delay: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixedDelay' }})
    percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentage' }})
    
