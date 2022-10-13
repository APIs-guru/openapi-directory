from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dimensionrange
from . import gridrange


@dataclass_json
@dataclass
class DeleteDuplicatesRequest:
    comparison_columns: Optional[List[dimensionrange.DimensionRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comparisonColumns' }})
    range: Optional[gridrange.GridRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    
