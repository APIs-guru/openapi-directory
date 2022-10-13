from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ExfilResource:
    components: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'components' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
