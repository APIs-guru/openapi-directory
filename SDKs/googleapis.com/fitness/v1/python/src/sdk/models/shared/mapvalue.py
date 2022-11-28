from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MapValue:
    r"""MapValue
    Holder object for the value of an entry in a map field of a data point. A map value supports a subset of the formats that the regular Value supports.
    """
    
    fp_val: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fpVal') }})
    
