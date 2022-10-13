from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cardinality


@dataclass_json
@dataclass
class EndCondition:
    cardinality: Optional[cardinality.Cardinality] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cardinality' }})
    
