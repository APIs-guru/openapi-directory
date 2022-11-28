from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class VideoSettingsOrientationEnum(str, Enum):
    ANY = "ANY"
    LANDSCAPE = "LANDSCAPE"
    PORTRAIT = "PORTRAIT"


@dataclass_json
@dataclass
class VideoSettings:
    r"""VideoSettings
    Video Settings
    """
    
    companion_settings: Optional[CompanionSetting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companionSettings') }})
    duration_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationSeconds') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    oba_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('obaEnabled') }})
    oba_settings: Optional[ObaIcon] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('obaSettings') }})
    orientation: Optional[VideoSettingsOrientationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orientation') }})
    skippable_settings: Optional[SkippableSetting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skippableSettings') }})
    transcode_settings: Optional[TranscodeSetting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transcodeSettings') }})
    
