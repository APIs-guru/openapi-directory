from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import logentry
from . import suppressioninfo


@dataclass_json
@dataclass
class TailLogEntriesResponse:
    entries: Optional[List[logentry.LogEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entries' }})
    suppression_info: Optional[List[suppressioninfo.SuppressionInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suppressionInfo' }})
    
