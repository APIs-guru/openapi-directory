from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UnitInvoiceTaxLine:
    tax_amount: Optional[Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxAmount') }})
    tax_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxName') }})
    tax_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxType') }})
    
