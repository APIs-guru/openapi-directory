from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LargeRequestFaultConfig:
    additional_request_size: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalRequestSize' }})
    ratio: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ratio' }})
    
