from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import translation
from . import translation


@dataclass_json
@dataclass
class TranslateTextResponse:
    glossary_translations: Optional[List[translation.Translation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'glossaryTranslations' }})
    translations: Optional[List[translation.Translation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'translations' }})
    
