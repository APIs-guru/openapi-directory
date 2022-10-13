from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cloudrun
from . import gke


@dataclass_json
@dataclass
class Destination:
    cloud_function: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudFunction' }})
    cloud_run: Optional[cloudrun.CloudRun] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudRun' }})
    gke: Optional[gke.Gke] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gke' }})
    workflow: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflow' }})
    
