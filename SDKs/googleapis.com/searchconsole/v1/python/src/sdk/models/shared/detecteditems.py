from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DetectedItems:
    r"""DetectedItems
    Rich Results items grouped by type.
    """
    
    items: Optional[List[Item]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    rich_result_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('richResultType') }})
    
