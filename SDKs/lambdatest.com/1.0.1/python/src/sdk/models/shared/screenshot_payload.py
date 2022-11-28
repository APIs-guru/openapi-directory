from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ScreenshotPayloadConfigs:
    macos_mojave: Optional[Browsers] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('macos mojave') }})
    windows_10: Optional[Browsers] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('windows 10') }})
    

@dataclass_json
@dataclass
class ScreenshotPayload:
    callback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callback_url') }})
    configs: Optional[ScreenshotPayloadConfigs] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configs') }})
    defer_time: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defer_time') }})
    email: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    mac_res: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac_res') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    tunnel: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tunnel') }})
    tunnel_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tunnel_identifier') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    win_res: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('win_res') }})
    
