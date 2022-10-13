from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import speechrecognitionresult


@dataclass_json
@dataclass
class RecognizeResponse:
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    results: Optional[List[speechrecognitionresult.SpeechRecognitionResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    total_billed_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalBilledTime' }})
    
