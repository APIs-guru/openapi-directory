from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import launchflextemplateparameter


@dataclass_json
@dataclass
class LaunchFlexTemplateRequest:
    launch_parameter: Optional[launchflextemplateparameter.LaunchFlexTemplateParameter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchParameter' }})
    validate_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validateOnly' }})
    
