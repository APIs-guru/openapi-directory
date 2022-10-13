from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import language_enum
from . import voice_name_enum


@dataclass_json
@dataclass
class StartTalkRequest:
    language: Optional[language_enum.LanguageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'level' }})
    loop: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loop' }})
    style: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'style' }})
    text: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    voice_name: Optional[voice_name_enum.VoiceNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voice_name' }})
    
