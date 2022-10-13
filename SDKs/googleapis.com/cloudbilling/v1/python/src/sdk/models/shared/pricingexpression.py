from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tierrate


@dataclass_json
@dataclass
class PricingExpression:
    base_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseUnit' }})
    base_unit_conversion_factor: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseUnitConversionFactor' }})
    base_unit_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseUnitDescription' }})
    display_quantity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayQuantity' }})
    tiered_rates: Optional[List[tierrate.TierRate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tieredRates' }})
    usage_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usageUnit' }})
    usage_unit_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usageUnitDescription' }})
    
