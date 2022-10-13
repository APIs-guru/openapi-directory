from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import effectiveiampolicy


@dataclass_json
@dataclass
class BatchGetEffectiveIamPoliciesResponse:
    policy_results: Optional[List[effectiveiampolicy.EffectiveIamPolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyResults' }})
    
