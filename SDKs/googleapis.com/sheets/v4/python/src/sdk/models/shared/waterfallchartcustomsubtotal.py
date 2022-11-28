from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WaterfallChartCustomSubtotal:
    r"""WaterfallChartCustomSubtotal
    A custom subtotal column for a waterfall chart series.
    """
    
    data_is_subtotal: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataIsSubtotal') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    subtotal_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtotalIndex') }})
    
