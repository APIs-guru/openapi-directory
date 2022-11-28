from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TranslateDocumentRequest:
    r"""TranslateDocumentRequest
    A document translation request.
    """
    
    customized_attribution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customizedAttribution') }})
    document_input_config: Optional[DocumentInputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentInputConfig') }})
    document_output_config: Optional[DocumentOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentOutputConfig') }})
    glossary_config: Optional[TranslateTextGlossaryConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('glossaryConfig') }})
    is_translate_native_pdf_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isTranslateNativePdfOnly') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    source_language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceLanguageCode') }})
    target_language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetLanguageCode') }})
    
