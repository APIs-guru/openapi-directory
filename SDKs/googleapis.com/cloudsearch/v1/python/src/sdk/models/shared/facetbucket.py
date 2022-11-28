from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FacetBucket:
    r"""FacetBucket
    A bucket in a facet is the basic unit of operation. A bucket can comprise either a single value OR a contiguous range of values, depending on the type of the field bucketed. FacetBucket is currently used only for returning the response object.
    """
    
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentage') }})
    value: Optional[Value] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
