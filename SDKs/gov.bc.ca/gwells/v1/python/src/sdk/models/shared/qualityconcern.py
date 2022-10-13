from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class QualityConcern:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    
