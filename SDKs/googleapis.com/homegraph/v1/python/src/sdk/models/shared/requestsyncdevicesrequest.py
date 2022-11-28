from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RequestSyncDevicesRequest:
    r"""RequestSyncDevicesRequest
    Request type for the [`RequestSyncDevices`](#google.home.graph.v1.HomeGraphApiService.RequestSyncDevices) call.
    """
    
    agent_user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentUserId') }})
    async_: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('async') }})
    
