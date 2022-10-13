from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import compositefilter
from . import fieldfilter
from . import unaryfilter


@dataclass_json
@dataclass
class Filter:
    composite_filter: Optional[compositefilter.CompositeFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compositeFilter' }})
    field_filter: Optional[fieldfilter.FieldFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldFilter' }})
    unary_filter: Optional[unaryfilter.UnaryFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unaryFilter' }})
    
