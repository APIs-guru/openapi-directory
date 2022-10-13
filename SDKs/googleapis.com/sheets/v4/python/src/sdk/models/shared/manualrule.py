from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import manualrulegroup


@dataclass_json
@dataclass
class ManualRule:
    groups: Optional[List[manualrulegroup.ManualRuleGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groups' }})
    
