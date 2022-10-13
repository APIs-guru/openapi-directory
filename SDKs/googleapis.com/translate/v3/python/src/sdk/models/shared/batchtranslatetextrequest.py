from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import translatetextglossaryconfig
from . import inputconfig
from . import outputconfig


@dataclass_json
@dataclass
class BatchTranslateTextRequest:
    glossaries: Optional[dict[str, translatetextglossaryconfig.TranslateTextGlossaryConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'glossaries' }})
    input_configs: Optional[List[inputconfig.InputConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputConfigs' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    models: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'models' }})
    output_config: Optional[outputconfig.OutputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputConfig' }})
    source_language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceLanguageCode' }})
    target_language_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetLanguageCodes' }})
    
