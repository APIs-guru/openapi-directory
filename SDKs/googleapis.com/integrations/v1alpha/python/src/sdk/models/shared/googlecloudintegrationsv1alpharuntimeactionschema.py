from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaRuntimeActionSchema:
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    input_schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputSchema' }})
    output_schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputSchema' }})
    
