from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest:
    r"""GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest
    Request message for SmartDeviceManagementService.ExecuteDeviceCommand
    """
    
    command: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    params: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('params') }})
    
