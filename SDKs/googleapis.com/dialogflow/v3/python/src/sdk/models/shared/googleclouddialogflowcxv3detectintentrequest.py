from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3outputaudioconfig
from . import googleclouddialogflowcxv3queryinput
from . import googleclouddialogflowcxv3queryparameters


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3DetectIntentRequest:
    output_audio_config: Optional[googleclouddialogflowcxv3outputaudioconfig.GoogleCloudDialogflowCxV3OutputAudioConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputAudioConfig' }})
    query_input: Optional[googleclouddialogflowcxv3queryinput.GoogleCloudDialogflowCxV3QueryInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryInput' }})
    query_params: Optional[googleclouddialogflowcxv3queryparameters.GoogleCloudDialogflowCxV3QueryParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryParams' }})
    
