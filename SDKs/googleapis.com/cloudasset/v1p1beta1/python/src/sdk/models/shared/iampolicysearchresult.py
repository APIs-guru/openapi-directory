from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import explanation
from . import policy


@dataclass_json
@dataclass
class IamPolicySearchResult:
    explanation: Optional[explanation.Explanation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'explanation' }})
    policy: Optional[policy.Policy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy' }})
    project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'project' }})
    resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    
