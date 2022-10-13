from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1outputaudioconfig
from . import googleclouddialogflowcxv3beta1queryinput
from . import googleclouddialogflowcxv3beta1queryparameters


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1DetectIntentRequest:
    output_audio_config: Optional[googleclouddialogflowcxv3beta1outputaudioconfig.GoogleCloudDialogflowCxV3beta1OutputAudioConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputAudioConfig' }})
    query_input: Optional[googleclouddialogflowcxv3beta1queryinput.GoogleCloudDialogflowCxV3beta1QueryInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryInput' }})
    query_params: Optional[googleclouddialogflowcxv3beta1queryparameters.GoogleCloudDialogflowCxV3beta1QueryParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryParams' }})
    
