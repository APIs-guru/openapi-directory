from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UnbindDeviceFromGatewayRequest:
    r"""UnbindDeviceFromGatewayRequest
    Request for `UnbindDeviceFromGateway`.
    """
    
    device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceId') }})
    gateway_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayId') }})
    
