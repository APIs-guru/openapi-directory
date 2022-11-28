from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest:
    r"""GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest
    Request message for the ExchangeDeviceCheckToken method.
    """
    
    device_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceToken') }})
    
