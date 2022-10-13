from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LegislativeSession:
    classification: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classification' }})
    end_date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_date' }})
    identifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifier' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    start_date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_date' }})
    
