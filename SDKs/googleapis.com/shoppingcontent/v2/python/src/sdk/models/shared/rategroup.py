from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import carrierrate
from . import table
from . import value
from . import table


@dataclass_json
@dataclass
class RateGroup:
    applicable_shipping_labels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicableShippingLabels' }})
    carrier_rates: Optional[List[carrierrate.CarrierRate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'carrierRates' }})
    main_table: Optional[table.Table] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mainTable' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    single_value: Optional[value.Value] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'singleValue' }})
    subtables: Optional[List[table.Table]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subtables' }})
    
