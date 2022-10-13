from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CustomDataExporterConfig:
    config: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    ref: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ref' }})
    
