from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dynamiclinkeventstat


@dataclass_json
@dataclass
class DynamicLinkStats:
    link_event_stats: Optional[List[dynamiclinkeventstat.DynamicLinkEventStat]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkEventStats' }})
    
