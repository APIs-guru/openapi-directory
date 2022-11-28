from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Value:
    r"""Value
    Holder object for the value of a single field in a data point. A field value has a particular format and is only ever set to one of an integer or a floating point value.
    """
    
    fp_val: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fpVal') }})
    int_val: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intVal') }})
    map_val: Optional[List[ValueMapValEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mapVal') }})
    string_val: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringVal') }})
    
