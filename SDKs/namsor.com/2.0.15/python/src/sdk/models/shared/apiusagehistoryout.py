from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import apicounterv2out


@dataclass_json
@dataclass
class APIUsageHistoryOut:
    detailed_usage: Optional[List[apicounterv2out.APICounterV2Out]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detailedUsage' }})
    
