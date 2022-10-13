from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import translatetextglossaryconfig
from . import batchdocumentinputconfig
from . import batchdocumentoutputconfig


@dataclass_json
@dataclass
class BatchTranslateDocumentRequest:
    format_conversions: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formatConversions' }})
    glossaries: Optional[dict[str, translatetextglossaryconfig.TranslateTextGlossaryConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'glossaries' }})
    input_configs: Optional[List[batchdocumentinputconfig.BatchDocumentInputConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputConfigs' }})
    models: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'models' }})
    output_config: Optional[batchdocumentoutputconfig.BatchDocumentOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputConfig' }})
    source_language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceLanguageCode' }})
    target_language_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetLanguageCodes' }})
    
