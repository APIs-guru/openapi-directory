from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1outputaudioconfig
from . import googleclouddialogflowv2beta1queryinput
from . import googleclouddialogflowv2beta1queryparameters


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1DetectIntentRequest:
    input_audio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputAudio' }})
    output_audio_config: Optional[googleclouddialogflowv2beta1outputaudioconfig.GoogleCloudDialogflowV2beta1OutputAudioConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputAudioConfig' }})
    output_audio_config_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputAudioConfigMask' }})
    query_input: Optional[googleclouddialogflowv2beta1queryinput.GoogleCloudDialogflowV2beta1QueryInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryInput' }})
    query_params: Optional[googleclouddialogflowv2beta1queryparameters.GoogleCloudDialogflowV2beta1QueryParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryParams' }})
    
