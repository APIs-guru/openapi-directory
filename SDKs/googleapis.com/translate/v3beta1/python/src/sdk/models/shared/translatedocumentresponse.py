from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import documenttranslation
from . import translatetextglossaryconfig
from . import documenttranslation


@dataclass_json
@dataclass
class TranslateDocumentResponse:
    document_translation: Optional[documenttranslation.DocumentTranslation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentTranslation' }})
    glossary_config: Optional[translatetextglossaryconfig.TranslateTextGlossaryConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'glossaryConfig' }})
    glossary_document_translation: Optional[documenttranslation.DocumentTranslation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'glossaryDocumentTranslation' }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'model' }})
    
