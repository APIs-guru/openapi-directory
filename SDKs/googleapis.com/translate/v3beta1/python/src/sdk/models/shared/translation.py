from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Translation:
    r"""Translation
    A single translation response.
    """
    
    detected_language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedLanguageCode') }})
    glossary_config: Optional[TranslateTextGlossaryConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('glossaryConfig') }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    translated_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('translatedText') }})
    
