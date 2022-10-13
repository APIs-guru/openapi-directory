from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import queryjob_stats


@dataclass_json
@dataclass
class Queryjob:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    result_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result-url' }})
    stats: Optional[queryjob_stats.QueryjobStats] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stats' }})
    
