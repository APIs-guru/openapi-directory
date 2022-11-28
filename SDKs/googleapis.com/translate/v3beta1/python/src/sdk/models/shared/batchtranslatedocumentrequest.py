from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchTranslateDocumentRequest:
    r"""BatchTranslateDocumentRequest
    The BatchTranslateDocument request.
    """
    
    format_conversions: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formatConversions') }})
    glossaries: Optional[dict[str, TranslateTextGlossaryConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('glossaries') }})
    input_configs: Optional[List[BatchDocumentInputConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputConfigs') }})
    models: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('models') }})
    output_config: Optional[BatchDocumentOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputConfig') }})
    source_language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceLanguageCode') }})
    target_language_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetLanguageCodes') }})
    
