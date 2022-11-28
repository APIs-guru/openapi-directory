from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2CharacterMaskConfig:
    r"""GooglePrivacyDlpV2CharacterMaskConfig
    Partially mask a string by replacing a given number of characters with a fixed character. Masking can start from the beginning or end of the string. This can be used on data of any type (numbers, longs, and so on) and when de-identifying structured data we'll attempt to preserve the original data's type. (This allows you to take a long like 123 and modify it to a string like **3.
    """
    
    characters_to_ignore: Optional[List[GooglePrivacyDlpV2CharsToIgnore]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('charactersToIgnore') }})
    masking_character: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maskingCharacter') }})
    number_to_mask: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberToMask') }})
    reverse_order: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reverseOrder') }})
    
