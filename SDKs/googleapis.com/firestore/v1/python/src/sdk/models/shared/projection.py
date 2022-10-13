from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import fieldreference


@dataclass_json
@dataclass
class Projection:
    fields: Optional[List[fieldreference.FieldReference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    
