from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Filter:
    r"""Filter
    A holder for any type of filter.
    """
    
    composite_filter: Optional[CompositeFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compositeFilter') }})
    property_filter: Optional[PropertyFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertyFilter') }})
    
