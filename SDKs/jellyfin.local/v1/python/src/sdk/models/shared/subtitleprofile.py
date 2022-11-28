from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SubtitleProfile:
    container: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Container') }})
    didl_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DidlMode') }})
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Format') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Language') }})
    method: Optional[SubtitleDeliveryMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Method') }})
    
