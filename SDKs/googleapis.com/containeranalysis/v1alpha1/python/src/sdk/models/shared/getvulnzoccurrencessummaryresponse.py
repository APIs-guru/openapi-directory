from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import severitycount


@dataclass_json
@dataclass
class GetVulnzOccurrencesSummaryResponse:
    counts: Optional[List[severitycount.SeverityCount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'counts' }})
    
