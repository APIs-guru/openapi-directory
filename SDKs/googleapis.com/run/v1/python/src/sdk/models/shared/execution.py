from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import objectmeta
from . import executionspec
from . import executionstatus


@dataclass_json
@dataclass
class Execution:
    api_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiVersion' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    metadata: Optional[objectmeta.ObjectMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    spec: Optional[executionspec.ExecutionSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec' }})
    status: Optional[executionstatus.ExecutionStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
