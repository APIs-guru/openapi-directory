from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import condition


@dataclass_json
@dataclass
class Rule:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    condition: Optional[List[condition.Condition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    container_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerId' }})
    fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fingerprint' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    rule_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleId' }})
    
