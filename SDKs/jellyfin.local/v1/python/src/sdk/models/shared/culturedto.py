from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CultureDto:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    three_letter_iso_language_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThreeLetterISOLanguageName' }})
    three_letter_iso_language_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThreeLetterISOLanguageNames' }})
    two_letter_iso_language_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TwoLetterISOLanguageName' }})
    
