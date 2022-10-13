from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import compositefilter
from . import propertyfilter


@dataclass_json
@dataclass
class Filter:
    composite_filter: Optional[compositefilter.CompositeFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compositeFilter' }})
    property_filter: Optional[propertyfilter.PropertyFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'propertyFilter' }})
    
