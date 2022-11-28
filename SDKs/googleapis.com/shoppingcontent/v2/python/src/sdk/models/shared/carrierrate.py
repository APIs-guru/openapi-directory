from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CarrierRate:
    carrier_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrierName') }})
    carrier_service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrierService') }})
    flat_adjustment: Optional[Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flatAdjustment') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    origin_postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originPostalCode') }})
    percentage_adjustment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentageAdjustment') }})
    
