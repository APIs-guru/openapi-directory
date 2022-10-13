from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import translatetextglossaryconfig


@dataclass_json
@dataclass
class TranslateTextRequest:
    contents: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contents' }})
    glossary_config: Optional[translatetextglossaryconfig.TranslateTextGlossaryConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'glossaryConfig' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mimeType' }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'model' }})
    source_language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceLanguageCode' }})
    target_language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetLanguageCode' }})
    
