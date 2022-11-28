from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SiteVideoSettingsOrientationEnum(str, Enum):
    ANY = "ANY"
    LANDSCAPE = "LANDSCAPE"
    PORTRAIT = "PORTRAIT"


@dataclass_json
@dataclass
class SiteVideoSettings:
    r"""SiteVideoSettings
    Video Settings
    """
    
    companion_settings: Optional[SiteCompanionSetting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companionSettings') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    orientation: Optional[SiteVideoSettingsOrientationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orientation') }})
    skippable_settings: Optional[SiteSkippableSetting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skippableSettings') }})
    transcode_settings: Optional[SiteTranscodeSetting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transcodeSettings') }})
    
