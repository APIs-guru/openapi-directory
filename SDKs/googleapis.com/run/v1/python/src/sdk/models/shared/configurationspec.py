from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import revisiontemplate


@dataclass_json
@dataclass
class ConfigurationSpec:
    template: Optional[revisiontemplate.RevisionTemplate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template' }})
    
