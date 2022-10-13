from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ModifyCloudToDeviceConfigRequest:
    binary_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'binaryData' }})
    version_to_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionToUpdate' }})
    
