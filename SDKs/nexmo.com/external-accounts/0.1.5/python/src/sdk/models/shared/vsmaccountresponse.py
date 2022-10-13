from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VsmAccountResponse:
    api_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api_key' }})
    applications: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applications' }})
    external_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external_id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    provider: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provider' }})
    
