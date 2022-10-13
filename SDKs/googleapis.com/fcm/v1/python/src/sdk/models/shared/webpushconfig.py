from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import webpushfcmoptions


@dataclass_json
@dataclass
class WebpushConfig:
    data: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    fcm_options: Optional[webpushfcmoptions.WebpushFcmOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fcmOptions' }})
    headers: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    notification: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notification' }})
    
