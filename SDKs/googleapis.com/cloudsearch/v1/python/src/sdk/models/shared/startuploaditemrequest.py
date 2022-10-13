from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import debugoptions


@dataclass_json
@dataclass
class StartUploadItemRequest:
    connector_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorName' }})
    debug_options: Optional[debugoptions.DebugOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debugOptions' }})
    
