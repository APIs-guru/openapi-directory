from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RuntimeInfo:
    diagnostic_output_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diagnosticOutputUri' }})
    endpoints: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpoints' }})
    output_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputUri' }})
    
