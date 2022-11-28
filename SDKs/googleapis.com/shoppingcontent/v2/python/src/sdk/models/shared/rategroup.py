from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RateGroup:
    applicable_shipping_labels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicableShippingLabels') }})
    carrier_rates: Optional[List[CarrierRate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrierRates') }})
    main_table: Optional[Table] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mainTable') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    single_value: Optional[Value] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('singleValue') }})
    subtables: Optional[List[Table]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtables') }})
    
