from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import speechrecognitionalternative


@dataclass_json
@dataclass
class SpeechRecognitionResult:
    alternatives: Optional[List[speechrecognitionalternative.SpeechRecognitionAlternative]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alternatives' }})
    channel_tag: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelTag' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    result_end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resultEndTime' }})
    
