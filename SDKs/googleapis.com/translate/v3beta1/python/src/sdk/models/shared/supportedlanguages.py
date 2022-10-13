from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import supportedlanguage


@dataclass_json
@dataclass
class SupportedLanguages:
    languages: Optional[List[supportedlanguage.SupportedLanguage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languages' }})
    
