from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LandlordProfitLossSectionModel:
    r"""LandlordProfitLossSectionModel
    Class for a group of entries.
    """
    
    rows: Optional[List[LandlordProfitLossRowModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rows') }})
    
