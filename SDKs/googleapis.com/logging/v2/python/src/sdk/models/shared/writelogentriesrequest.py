from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import logentry
from . import monitoredresource


@dataclass_json
@dataclass
class WriteLogEntriesRequest:
    dry_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dryRun' }})
    entries: Optional[List[logentry.LogEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entries' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    log_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logName' }})
    partial_success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partialSuccess' }})
    resource: Optional[monitoredresource.MonitoredResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    
