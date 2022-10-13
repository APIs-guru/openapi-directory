from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import executiontemplatespec


@dataclass_json
@dataclass
class JobSpec:
    template: Optional[executiontemplatespec.ExecutionTemplateSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template' }})
    
