from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import compositefilter
from . import valuefilter


@dataclass_json
@dataclass
class Filter:
    composite_filter: Optional[compositefilter.CompositeFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compositeFilter' }})
    value_filter: Optional[valuefilter.ValueFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueFilter' }})
    
