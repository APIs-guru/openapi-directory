from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import policyinfo


@dataclass_json
@dataclass
class EffectiveIamPolicy:
    full_resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullResourceName' }})
    policies: Optional[List[policyinfo.PolicyInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policies' }})
    
