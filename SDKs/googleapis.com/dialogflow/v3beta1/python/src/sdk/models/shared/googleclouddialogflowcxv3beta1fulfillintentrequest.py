from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1match
from . import googleclouddialogflowcxv3beta1matchintentrequest
from . import googleclouddialogflowcxv3beta1outputaudioconfig


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1FulfillIntentRequest:
    match: Optional[googleclouddialogflowcxv3beta1match.GoogleCloudDialogflowCxV3beta1Match] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'match' }})
    match_intent_request: Optional[googleclouddialogflowcxv3beta1matchintentrequest.GoogleCloudDialogflowCxV3beta1MatchIntentRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchIntentRequest' }})
    output_audio_config: Optional[googleclouddialogflowcxv3beta1outputaudioconfig.GoogleCloudDialogflowCxV3beta1OutputAudioConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputAudioConfig' }})
    
