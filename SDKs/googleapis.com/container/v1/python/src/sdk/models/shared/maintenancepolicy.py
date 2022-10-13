from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import maintenancewindow


@dataclass_json
@dataclass
class MaintenancePolicy:
    resource_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceVersion' }})
    window: Optional[maintenancewindow.MaintenanceWindow] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'window' }})
    
