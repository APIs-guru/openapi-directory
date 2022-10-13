from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import detectedlanguage


@dataclass_json
@dataclass
class DetectLanguageResponse:
    languages: Optional[List[detectedlanguage.DetectedLanguage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languages' }})
    
