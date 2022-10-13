from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import browsers
from . import browsers


@dataclass_json
@dataclass
class ScreenshotPayloadConfigs:
    macos_mojave: Optional[browsers.Browsers] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'macos mojave' }})
    windows_10: Optional[browsers.Browsers] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'windows 10' }})
    

@dataclass_json
@dataclass
class ScreenshotPayload:
    callback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'callback_url' }})
    configs: Optional[ScreenshotPayloadConfigs] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configs' }})
    defer_time: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defer_time' }})
    email: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    mac_res: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mac_res' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    tunnel: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tunnel' }})
    tunnel_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tunnel_identifier' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    win_res: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'win_res' }})
    
