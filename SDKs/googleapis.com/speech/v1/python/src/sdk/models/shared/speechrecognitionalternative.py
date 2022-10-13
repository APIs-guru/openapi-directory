from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import wordinfo


@dataclass_json
@dataclass
class SpeechRecognitionAlternative:
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidence' }})
    transcript: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transcript' }})
    words: Optional[List[wordinfo.WordInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'words' }})
    
