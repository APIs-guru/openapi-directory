from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import location
from . import location
from . import locationruletype_enum


@dataclass_json
@dataclass
class LocationRuleConditions11:
    from_location: Optional[location.Location] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from_location' }})
    

@dataclass_json
@dataclass
class LocationRuleConditions12:
    from_location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from_location_id' }})
    

@dataclass_json
@dataclass
class LocationRuleConditions13:
    from_location_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from_location_url' }})
    

@dataclass_json
@dataclass
class LocationRuleConditions21:
    to_location: Optional[location.Location] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to_location' }})
    

@dataclass_json
@dataclass
class LocationRuleConditions22:
    to_location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to_location_id' }})
    

@dataclass_json
@dataclass
class LocationRuleConditions23:
    to_location_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to_location_url' }})
    

@dataclass_json
@dataclass
class LocationRule:
    conditions: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conditions' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    time_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_created' }})
    time_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_updated' }})
    type: Optional[locationruletype_enum.LocationRuleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
