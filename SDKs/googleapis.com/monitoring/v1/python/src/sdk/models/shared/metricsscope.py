from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import monitoredproject


@dataclass_json
@dataclass
class MetricsScope:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    monitored_projects: Optional[List[monitoredproject.MonitoredProject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monitoredProjects' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
