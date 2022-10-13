from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import apnsfcmoptions


@dataclass_json
@dataclass
class ApnsConfig:
    fcm_options: Optional[apnsfcmoptions.ApnsFcmOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fcmOptions' }})
    headers: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    payload: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payload' }})
    
