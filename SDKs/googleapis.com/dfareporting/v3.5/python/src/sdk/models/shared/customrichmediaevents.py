from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dimensionvalue


@dataclass_json
@dataclass
class CustomRichMediaEvents:
    filtered_event_ids: Optional[List[dimensionvalue.DimensionValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filteredEventIds' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
