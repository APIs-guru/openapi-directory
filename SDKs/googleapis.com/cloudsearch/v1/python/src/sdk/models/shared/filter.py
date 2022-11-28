from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Filter:
    r"""Filter
    A generic way of expressing filters in a query, which supports two approaches: **1. Setting a ValueFilter.** The name must match an operator_name defined in the schema for your data source. **2. Setting a CompositeFilter.** The filters are evaluated using the logical operator. The top-level operators can only be either an AND or a NOT. AND can appear only at the top-most level. OR can appear only under a top-level AND.
    """
    
    composite_filter: Optional[CompositeFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compositeFilter') }})
    value_filter: Optional[ValueFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueFilter') }})
    
