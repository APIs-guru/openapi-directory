from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2outputaudioconfig
from . import googleclouddialogflowv2queryinput
from . import googleclouddialogflowv2queryparameters


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2DetectIntentRequest:
    input_audio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputAudio' }})
    output_audio_config: Optional[googleclouddialogflowv2outputaudioconfig.GoogleCloudDialogflowV2OutputAudioConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputAudioConfig' }})
    output_audio_config_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputAudioConfigMask' }})
    query_input: Optional[googleclouddialogflowv2queryinput.GoogleCloudDialogflowV2QueryInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryInput' }})
    query_params: Optional[googleclouddialogflowv2queryparameters.GoogleCloudDialogflowV2QueryParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryParams' }})
    
