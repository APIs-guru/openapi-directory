from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetSpreadsheetByDataFilterRequest:
    r"""GetSpreadsheetByDataFilterRequest
    The request for retrieving a Spreadsheet.
    """
    
    data_filters: Optional[List[DataFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataFilters') }})
    include_grid_data: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeGridData') }})
    
