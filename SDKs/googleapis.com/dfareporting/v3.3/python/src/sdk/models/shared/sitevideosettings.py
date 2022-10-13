from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import sitecompanionsetting
from . import siteskippablesetting
from . import sitetranscodesetting

class SiteVideoSettingsOrientationEnum(str, Enum):
    ANY = "ANY"
    LANDSCAPE = "LANDSCAPE"
    PORTRAIT = "PORTRAIT"


@dataclass_json
@dataclass
class SiteVideoSettings:
    companion_settings: Optional[sitecompanionsetting.SiteCompanionSetting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'companionSettings' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    orientation: Optional[SiteVideoSettingsOrientationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orientation' }})
    skippable_settings: Optional[siteskippablesetting.SiteSkippableSetting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skippableSettings' }})
    transcode_settings: Optional[sitetranscodesetting.SiteTranscodeSetting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transcodeSettings' }})
    
