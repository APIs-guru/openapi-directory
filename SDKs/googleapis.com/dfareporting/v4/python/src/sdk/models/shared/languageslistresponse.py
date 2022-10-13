from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import language


@dataclass_json
@dataclass
class LanguagesListResponse:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    languages: Optional[List[language.Language]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languages' }})
    
