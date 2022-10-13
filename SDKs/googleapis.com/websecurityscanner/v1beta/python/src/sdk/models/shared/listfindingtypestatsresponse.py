from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import findingtypestats


@dataclass_json
@dataclass
class ListFindingTypeStatsResponse:
    finding_type_stats: Optional[List[findingtypestats.FindingTypeStats]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'findingTypeStats' }})
    
