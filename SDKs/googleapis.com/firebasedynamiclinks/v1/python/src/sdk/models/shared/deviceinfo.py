from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeviceInfo:
    device_model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceModelName' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    language_code_from_webview: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCodeFromWebview' }})
    language_code_raw: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCodeRaw' }})
    screen_resolution_height: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'screenResolutionHeight' }})
    screen_resolution_width: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'screenResolutionWidth' }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezone' }})
    
