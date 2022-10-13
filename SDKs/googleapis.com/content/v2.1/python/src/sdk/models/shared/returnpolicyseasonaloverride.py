from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import returnpolicypolicy


@dataclass_json
@dataclass
class ReturnPolicySeasonalOverride:
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    policy: Optional[returnpolicypolicy.ReturnPolicyPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy' }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate' }})
    
