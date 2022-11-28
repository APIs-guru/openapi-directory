from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse:
    r"""GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse
    Response message for SmartDeviceManagementService.ExecuteDeviceCommand
    """
    
    results: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    
