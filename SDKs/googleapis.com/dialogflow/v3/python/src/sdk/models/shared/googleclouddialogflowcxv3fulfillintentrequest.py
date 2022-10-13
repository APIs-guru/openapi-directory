from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3match
from . import googleclouddialogflowcxv3matchintentrequest
from . import googleclouddialogflowcxv3outputaudioconfig


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3FulfillIntentRequest:
    match: Optional[googleclouddialogflowcxv3match.GoogleCloudDialogflowCxV3Match] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'match' }})
    match_intent_request: Optional[googleclouddialogflowcxv3matchintentrequest.GoogleCloudDialogflowCxV3MatchIntentRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchIntentRequest' }})
    output_audio_config: Optional[googleclouddialogflowcxv3outputaudioconfig.GoogleCloudDialogflowCxV3OutputAudioConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputAudioConfig' }})
    
