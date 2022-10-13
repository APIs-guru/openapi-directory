from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import filtercriteria
from . import filterspec
from . import gridrange
from . import sortspec


@dataclass_json
@dataclass
class FilterView:
    criteria: Optional[dict[str, filtercriteria.FilterCriteria]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'criteria' }})
    filter_specs: Optional[List[filterspec.FilterSpec]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterSpecs' }})
    filter_view_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterViewId' }})
    named_range_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namedRangeId' }})
    range: Optional[gridrange.GridRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    sort_specs: Optional[List[sortspec.SortSpec]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortSpecs' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
