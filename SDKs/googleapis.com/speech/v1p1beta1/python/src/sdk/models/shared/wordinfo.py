from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WordInfo:
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidence' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    speaker_tag: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'speakerTag' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    word: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'word' }})
    
