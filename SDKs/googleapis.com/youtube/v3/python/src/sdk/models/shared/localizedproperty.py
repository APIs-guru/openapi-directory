from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import languagetag
from . import localizedstring


@dataclass_json
@dataclass
class LocalizedProperty:
    default_language: Optional[languagetag.LanguageTag] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultLanguage' }})
    localized: Optional[List[localizedstring.LocalizedString]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localized' }})
    
