from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import languagesresource


@dataclass_json
@dataclass
class LanguagesListResponse:
    languages: Optional[List[languagesresource.LanguagesResource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languages' }})
    
