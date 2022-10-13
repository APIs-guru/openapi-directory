from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ratetier


@dataclass_json
@dataclass
class Rate:
    tiers: Optional[List[ratetier.RateTier]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tiers' }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    unit_count: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unitCount' }})
    
