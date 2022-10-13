from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettingsAudioFormatEnum(str, Enum):
    AUDIO_FORMAT_UNSPECIFIED = "AUDIO_FORMAT_UNSPECIFIED"
    MULAW = "MULAW"
    MP3 = "MP3"
    OGG = "OGG"


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettings:
    audio_export_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audioExportPattern' }})
    audio_format: Optional[GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettingsAudioFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audioFormat' }})
    enable_audio_redaction: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableAudioRedaction' }})
    gcs_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsBucket' }})
    
