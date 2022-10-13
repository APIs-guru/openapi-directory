from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dimensiongroup


@dataclass_json
@dataclass
class DeleteDimensionGroupResponse:
    dimension_groups: Optional[List[dimensiongroup.DimensionGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionGroups' }})
    
