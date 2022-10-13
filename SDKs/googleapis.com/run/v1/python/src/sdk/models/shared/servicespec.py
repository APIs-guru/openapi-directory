from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import revisiontemplate
from . import traffictarget


@dataclass_json
@dataclass
class ServiceSpec:
    template: Optional[revisiontemplate.RevisionTemplate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template' }})
    traffic: Optional[List[traffictarget.TrafficTarget]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'traffic' }})
    
