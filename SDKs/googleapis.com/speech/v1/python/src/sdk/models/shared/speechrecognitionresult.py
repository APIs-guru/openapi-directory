from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SpeechRecognitionResult:
    r"""SpeechRecognitionResult
    A speech recognition result corresponding to a portion of the audio.
    """
    
    alternatives: Optional[List[SpeechRecognitionAlternative]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternatives') }})
    channel_tag: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelTag') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    result_end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resultEndTime') }})
    
