from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import dimensionrange


@dataclass_json
@dataclass
class MoveDimensionRequest:
    destination_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationIndex' }})
    source: Optional[dimensionrange.DimensionRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    
