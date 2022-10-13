from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PulsarDataExporterConfig:
    namespace: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespace' }})
    tenant: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenant' }})
    topic: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic' }})
    uri: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
