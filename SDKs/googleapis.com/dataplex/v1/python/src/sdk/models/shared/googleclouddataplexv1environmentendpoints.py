from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDataplexV1EnvironmentEndpoints:
    notebooks: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notebooks' }})
    sql: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sql' }})
    
