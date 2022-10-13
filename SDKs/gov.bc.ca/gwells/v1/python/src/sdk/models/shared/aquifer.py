from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Aquifer:
    aquifer_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aquifer_id' }})
    aquifer_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aquifer_name' }})
    area: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'area' }})
    demand: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'demand' }})
    demand_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'demand_description' }})
    known_water_use: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'known_water_use' }})
    known_water_use_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'known_water_use_description' }})
    litho_stratographic_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'litho_stratographic_unit' }})
    location_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_description' }})
    mapping_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mapping_year' }})
    material: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'material' }})
    material_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'material_description' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    productivity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productivity' }})
    productivity_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productivity_description' }})
    quality_concern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quality_concern' }})
    quality_concern_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quality_concern_description' }})
    subtype: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subtype' }})
    subtype_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subtype_description' }})
    vulnerability: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vulnerability' }})
    vulnerability_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vulnerability_description' }})
    
