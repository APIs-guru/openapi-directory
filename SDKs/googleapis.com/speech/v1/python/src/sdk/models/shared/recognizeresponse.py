from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RecognizeResponse:
    r"""RecognizeResponse
    The only message returned to the client by the `Recognize` method. It contains the result as zero or more sequential `SpeechRecognitionResult` messages.
    """
    
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    results: Optional[List[SpeechRecognitionResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    speech_adaptation_info: Optional[SpeechAdaptationInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('speechAdaptationInfo') }})
    total_billed_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalBilledTime') }})
    
