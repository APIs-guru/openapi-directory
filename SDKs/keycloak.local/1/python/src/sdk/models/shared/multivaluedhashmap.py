from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MultivaluedHashMap:
    empty: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('empty') }})
    load_factor: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loadFactor') }})
    threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threshold') }})
    
