from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import dimensionrange


@dataclass_json
@dataclass
class InsertDimensionRequest:
    inherit_from_before: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inheritFromBefore' }})
    range: Optional[dimensionrange.DimensionRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    
