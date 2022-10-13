from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import extendedvalue
from . import extendedvalue


@dataclass_json
@dataclass
class ManualRuleGroup:
    group_name: Optional[extendedvalue.ExtendedValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupName' }})
    items: Optional[List[extendedvalue.ExtendedValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    
