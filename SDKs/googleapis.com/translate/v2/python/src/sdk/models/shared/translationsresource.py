from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TranslationsResource:
    detected_source_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedSourceLanguage') }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    translated_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('translatedText') }})
    
