from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import documentinputconfig
from . import documentoutputconfig
from . import translatetextglossaryconfig


@dataclass_json
@dataclass
class TranslateDocumentRequest:
    customized_attribution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customizedAttribution' }})
    document_input_config: Optional[documentinputconfig.DocumentInputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentInputConfig' }})
    document_output_config: Optional[documentoutputconfig.DocumentOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentOutputConfig' }})
    glossary_config: Optional[translatetextglossaryconfig.TranslateTextGlossaryConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'glossaryConfig' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'model' }})
    source_language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceLanguageCode' }})
    target_language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetLanguageCode' }})
    
