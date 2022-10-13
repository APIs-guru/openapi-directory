from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SpellingCorrection:
    corrected: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'corrected' }})
    corrected_html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'correctedHtml' }})
    corrected_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'correctedText' }})
    
