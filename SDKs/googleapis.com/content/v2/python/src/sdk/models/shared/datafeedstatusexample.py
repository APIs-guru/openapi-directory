from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DatafeedStatusExample:
    r"""DatafeedStatusExample
    An example occurrence for a particular error.
    """
    
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemId') }})
    line_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineNumber') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
