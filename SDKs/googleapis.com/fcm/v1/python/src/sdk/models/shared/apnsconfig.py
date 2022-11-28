from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ApnsConfig:
    r"""ApnsConfig
    [Apple Push Notification Service](https://goo.gl/MXRTPa) specific options.
    """
    
    fcm_options: Optional[ApnsFcmOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fcmOptions') }})
    headers: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    payload: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    
