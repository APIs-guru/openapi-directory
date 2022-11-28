from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TranslateTextResponse:
    glossary_translations: Optional[List[Translation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('glossaryTranslations') }})
    translations: Optional[List[Translation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('translations') }})
    
