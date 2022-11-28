from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Filter:
    r"""Filter
    A filter.
    """
    
    composite_filter: Optional[CompositeFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compositeFilter') }})
    field_filter: Optional[FieldFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldFilter') }})
    unary_filter: Optional[UnaryFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unaryFilter') }})
    
