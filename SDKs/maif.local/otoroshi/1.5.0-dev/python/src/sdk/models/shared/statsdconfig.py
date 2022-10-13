from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StatsdConfig:
    datadog: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datadog' }})
    host: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    
