from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Count:
    r"""Count
    The number of products in a single package. For more information, see https://support.google.com/manufacturers/answer/6124116#count.
    """
    
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
