from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WaterfallChartCustomSubtotal:
    data_is_subtotal: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataIsSubtotal' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    subtotal_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subtotalIndex' }})
    
