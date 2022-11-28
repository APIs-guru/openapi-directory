from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetIosReopenAttributionRequest:
    r"""GetIosReopenAttributionRequest
    Request for iSDK to get reopen attribution for app universal link open deeplinking. This endpoint is meant for only iOS requests.
    """
    
    bundle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bundleId') }})
    requested_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedLink') }})
    sdk_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sdkVersion') }})
    
