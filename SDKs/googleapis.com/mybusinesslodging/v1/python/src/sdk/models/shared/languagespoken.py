from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class LanguageSpokenSpokenExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"


@dataclass_json
@dataclass
class LanguageSpoken:
    r"""LanguageSpoken
    Language spoken by at least one staff member.
    """
    
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    spoken: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spoken') }})
    spoken_exception: Optional[LanguageSpokenSpokenExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spokenException') }})
    
