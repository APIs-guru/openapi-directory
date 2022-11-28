from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettingsAudioFormatEnum(str, Enum):
    AUDIO_FORMAT_UNSPECIFIED = "AUDIO_FORMAT_UNSPECIFIED"
    MULAW = "MULAW"
    MP3 = "MP3"
    OGG = "OGG"


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettings:
    r"""GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettings
    Settings for exporting audio.
    """
    
    audio_export_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioExportPattern') }})
    audio_format: Optional[GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettingsAudioFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioFormat') }})
    enable_audio_redaction: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableAudioRedaction') }})
    gcs_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsBucket') }})
    
