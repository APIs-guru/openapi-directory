from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TranslateDocumentResponse:
    r"""TranslateDocumentResponse
    A translated document response message.
    """
    
    document_translation: Optional[DocumentTranslation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentTranslation') }})
    glossary_config: Optional[TranslateTextGlossaryConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('glossaryConfig') }})
    glossary_document_translation: Optional[DocumentTranslation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('glossaryDocumentTranslation') }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    
