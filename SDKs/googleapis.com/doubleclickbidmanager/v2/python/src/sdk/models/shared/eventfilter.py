from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import pathqueryoptionsfilter


@dataclass_json
@dataclass
class EventFilter:
    dimension_filter: Optional[pathqueryoptionsfilter.PathQueryOptionsFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionFilter' }})
    
