from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import companionsetting
from . import obaicon
from . import skippablesetting
from . import transcodesetting

class VideoSettingsOrientationEnum(str, Enum):
    ANY = "ANY"
    LANDSCAPE = "LANDSCAPE"
    PORTRAIT = "PORTRAIT"


@dataclass_json
@dataclass
class VideoSettings:
    companion_settings: Optional[companionsetting.CompanionSetting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'companionSettings' }})
    duration_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'durationSeconds' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    oba_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'obaEnabled' }})
    oba_settings: Optional[obaicon.ObaIcon] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'obaSettings' }})
    orientation: Optional[VideoSettingsOrientationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orientation' }})
    publisher_specification_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publisherSpecificationId' }})
    skippable_settings: Optional[skippablesetting.SkippableSetting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skippableSettings' }})
    transcode_settings: Optional[transcodesetting.TranscodeSetting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transcodeSettings' }})
    
