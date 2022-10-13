from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import schedulerresource
from . import webserverresource
from . import workerresource


@dataclass_json
@dataclass
class WorkloadsConfig:
    scheduler: Optional[schedulerresource.SchedulerResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduler' }})
    web_server: Optional[webserverresource.WebServerResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webServer' }})
    worker: Optional[workerresource.WorkerResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'worker' }})
    
