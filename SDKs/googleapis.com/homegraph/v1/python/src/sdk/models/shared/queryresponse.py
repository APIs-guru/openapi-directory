from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class QueryResponse:
    r"""QueryResponse
    Response type for the [`Query`](#google.home.graph.v1.HomeGraphApiService.Query) call. This should follow the same format as the Google smart home `action.devices.QUERY` [response](https://developers.google.com/assistant/smarthome/reference/intent/query). # Example ```json { \"requestId\": \"ff36a3cc-ec34-11e6-b1a0-64510650abcf\", \"payload\": { \"devices\": { \"123\": { \"on\": true, \"online\": true }, \"456\": { \"on\": true, \"online\": true, \"brightness\": 80, \"color\": { \"name\": \"cerulean\", \"spectrumRGB\": 31655 } } } } } ```
    """
    
    payload: Optional[QueryResponsePayload] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
