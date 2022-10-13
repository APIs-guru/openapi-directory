from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import profileconditiontype_enum
from . import profileconditionvalue_enum


@dataclass_json
@dataclass
class ProfileCondition:
    condition: Optional[profileconditiontype_enum.ProfileConditionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Condition' }})
    is_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsRequired' }})
    property: Optional[profileconditionvalue_enum.ProfileConditionValueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Property' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
