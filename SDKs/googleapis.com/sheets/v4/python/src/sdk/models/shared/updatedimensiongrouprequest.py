from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import dimensiongroup


@dataclass_json
@dataclass
class UpdateDimensionGroupRequest:
    dimension_group: Optional[dimensiongroup.DimensionGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionGroup' }})
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    
