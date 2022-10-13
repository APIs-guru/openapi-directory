from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import dimensionvalue


@dataclass_json
@dataclass
class PlacementAssignment:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    placement_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placementId' }})
    placement_id_dimension_value: Optional[dimensionvalue.DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placementIdDimensionValue' }})
    ssl_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sslRequired' }})
    
