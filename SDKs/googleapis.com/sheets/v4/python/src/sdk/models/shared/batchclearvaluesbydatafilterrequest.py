from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchClearValuesByDataFilterRequest:
    r"""BatchClearValuesByDataFilterRequest
    The request for clearing more than one range selected by a DataFilter in a spreadsheet.
    """
    
    data_filters: Optional[List[DataFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataFilters') }})
    
