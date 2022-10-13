from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import objectmeta
from . import executionspec


@dataclass_json
@dataclass
class ExecutionTemplateSpec:
    metadata: Optional[objectmeta.ObjectMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    spec: Optional[executionspec.ExecutionSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec' }})
    
