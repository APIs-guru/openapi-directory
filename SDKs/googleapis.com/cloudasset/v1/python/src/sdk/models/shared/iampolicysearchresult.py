from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import explanation
from . import policy


@dataclass_json
@dataclass
class IamPolicySearchResult:
    asset_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetType' }})
    explanation: Optional[explanation.Explanation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'explanation' }})
    folders: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'folders' }})
    organization: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization' }})
    policy: Optional[policy.Policy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy' }})
    project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'project' }})
    resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    
