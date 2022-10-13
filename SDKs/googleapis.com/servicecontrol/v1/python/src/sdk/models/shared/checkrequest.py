from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import operation


@dataclass_json
@dataclass
class CheckRequest:
    operation: Optional[operation.Operation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operation' }})
    request_project_settings: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestProjectSettings' }})
    service_config_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceConfigId' }})
    skip_activation_check: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skipActivationCheck' }})
    
