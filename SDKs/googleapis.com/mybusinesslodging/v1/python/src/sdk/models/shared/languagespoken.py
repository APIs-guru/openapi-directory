from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class LanguageSpokenSpokenExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"


@dataclass_json
@dataclass
class LanguageSpoken:
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    spoken: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spoken' }})
    spoken_exception: Optional[LanguageSpokenSpokenExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spokenException' }})
    
