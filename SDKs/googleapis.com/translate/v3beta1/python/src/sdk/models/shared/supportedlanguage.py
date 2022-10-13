from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SupportedLanguage:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    support_source: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportSource' }})
    support_target: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportTarget' }})
    
