from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googletypedate
from . import googletypedate


@dataclass_json
@dataclass
class GoogleCloudPolicysimulatorV1ReplayResultsSummary:
    difference_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'differenceCount' }})
    error_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorCount' }})
    log_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logCount' }})
    newest_date: Optional[googletypedate.GoogleTypeDate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newestDate' }})
    oldest_date: Optional[googletypedate.GoogleTypeDate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oldestDate' }})
    unchanged_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unchangedCount' }})
    
