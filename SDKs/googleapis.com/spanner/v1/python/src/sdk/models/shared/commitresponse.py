from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import commitstats


@dataclass_json
@dataclass
class CommitResponse:
    commit_stats: Optional[commitstats.CommitStats] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commitStats' }})
    commit_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commitTimestamp' }})
    
