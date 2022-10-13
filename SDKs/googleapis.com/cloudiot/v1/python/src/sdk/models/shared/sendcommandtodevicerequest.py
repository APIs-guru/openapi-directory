from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SendCommandToDeviceRequest:
    binary_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'binaryData' }})
    subfolder: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subfolder' }})
    
