from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import locationruletype_enum


@dataclass_json
@dataclass
class LocationRuleUpdateConditions:
    from_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from_location' }})
    to_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to_location' }})
    

@dataclass_json
@dataclass
class LocationRuleUpdate:
    conditions: Optional[LocationRuleUpdateConditions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conditions' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    type: Optional[locationruletype_enum.LocationRuleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
