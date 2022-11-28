from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WebpushConfig:
    r"""WebpushConfig
    [Webpush protocol](https://tools.ietf.org/html/rfc8030) options.
    """
    
    data: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    fcm_options: Optional[WebpushFcmOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fcmOptions') }})
    headers: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    notification: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notification') }})
    
