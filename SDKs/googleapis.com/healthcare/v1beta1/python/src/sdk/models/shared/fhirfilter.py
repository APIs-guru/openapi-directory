from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import resources


@dataclass_json
@dataclass
class FhirFilter:
    resources: Optional[resources.Resources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    
