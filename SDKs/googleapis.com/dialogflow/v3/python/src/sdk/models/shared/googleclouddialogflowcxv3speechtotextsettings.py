from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3SpeechToTextSettings:
    r"""GoogleCloudDialogflowCxV3SpeechToTextSettings
    Settings related to speech recognition.
    """
    
    enable_speech_adaptation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableSpeechAdaptation') }})
    
