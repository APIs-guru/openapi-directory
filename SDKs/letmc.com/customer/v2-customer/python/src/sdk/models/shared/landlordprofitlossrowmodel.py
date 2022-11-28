from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LandlordProfitLossRowModel:
    r"""LandlordProfitLossRowModel
    Class for a group of entries.
    """
    
    month_totals: Optional[List[KeyValuePairStringString]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonthTotals') }})
    nominal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NominalCode') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Title') }})
    total: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Total') }})
    
