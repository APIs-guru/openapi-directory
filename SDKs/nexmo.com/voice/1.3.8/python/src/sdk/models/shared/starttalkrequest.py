from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StartTalkRequest:
    text: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    language: Optional[LanguageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    loop: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loop') }})
    style: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('style') }})
    voice_name: Optional[VoiceNameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice_name') }})
    
