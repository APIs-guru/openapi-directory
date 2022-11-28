from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SyncResponse:
    r"""SyncResponse
    Response type for the [`Sync`](#google.home.graph.v1.HomeGraphApiService.Sync) call. This should follow the same format as the Google smart home `action.devices.SYNC` [response](https://developers.google.com/assistant/smarthome/reference/intent/sync). # Example ```json { \"requestId\": \"ff36a3cc-ec34-11e6-b1a0-64510650abcf\", \"payload\": { \"agentUserId\": \"1836.15267389\", \"devices\": [{ \"id\": \"123\", \"type\": \"action.devices.types.OUTLET\", \"traits\": [ \"action.devices.traits.OnOff\" ], \"name\": { \"defaultNames\": [\"My Outlet 1234\"], \"name\": \"Night light\", \"nicknames\": [\"wall plug\"] }, \"willReportState\": false, \"deviceInfo\": { \"manufacturer\": \"lights-out-inc\", \"model\": \"hs1234\", \"hwVersion\": \"3.2\", \"swVersion\": \"11.4\" }, \"customData\": { \"fooValue\": 74, \"barValue\": true, \"bazValue\": \"foo\" } }] } } ```
    """
    
    payload: Optional[SyncResponsePayload] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
