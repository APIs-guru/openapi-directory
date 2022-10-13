from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import keyusagedailycountepoch


@dataclass_json
@dataclass
class KeyUsageResult:
    daily_count: Optional[List[keyusagedailycountepoch.KeyUsageDailyCountEpoch]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dailyCount' }})
    end: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    start: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    
