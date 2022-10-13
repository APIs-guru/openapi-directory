from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import translatetextglossaryconfig


@dataclass_json
@dataclass
class Translation:
    detected_language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectedLanguageCode' }})
    glossary_config: Optional[translatetextglossaryconfig.TranslateTextGlossaryConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'glossaryConfig' }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'model' }})
    translated_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'translatedText' }})
    
