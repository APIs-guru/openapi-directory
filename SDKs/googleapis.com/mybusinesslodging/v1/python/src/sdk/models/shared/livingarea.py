from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import livingareaaccessibility
from . import livingareaeating
from . import livingareafeatures
from . import livingarealayout
from . import livingareasleeping


@dataclass_json
@dataclass
class LivingArea:
    accessibility: Optional[livingareaaccessibility.LivingAreaAccessibility] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessibility' }})
    eating: Optional[livingareaeating.LivingAreaEating] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eating' }})
    features: Optional[livingareafeatures.LivingAreaFeatures] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'features' }})
    layout: Optional[livingarealayout.LivingAreaLayout] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layout' }})
    sleeping: Optional[livingareasleeping.LivingAreaSleeping] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sleeping' }})
    
