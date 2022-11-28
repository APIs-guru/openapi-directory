from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BatchClearValuesRequest:
    r"""BatchClearValuesRequest
    The request for clearing more than one range of values in a spreadsheet.
    """
    
    ranges: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ranges') }})
    
