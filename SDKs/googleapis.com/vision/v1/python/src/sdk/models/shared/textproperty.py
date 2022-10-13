from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import detectedbreak
from . import detectedlanguage


@dataclass_json
@dataclass
class TextProperty:
    detected_break: Optional[detectedbreak.DetectedBreak] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectedBreak' }})
    detected_languages: Optional[List[detectedlanguage.DetectedLanguage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectedLanguages' }})
    
