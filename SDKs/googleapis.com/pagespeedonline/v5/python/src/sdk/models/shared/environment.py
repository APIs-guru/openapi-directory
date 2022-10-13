from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Environment:
    benchmark_index: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'benchmarkIndex' }})
    host_user_agent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostUserAgent' }})
    network_user_agent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkUserAgent' }})
    
