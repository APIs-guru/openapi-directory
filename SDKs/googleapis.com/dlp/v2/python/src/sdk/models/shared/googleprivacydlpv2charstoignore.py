from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnoreEnum(str, Enum):
    COMMON_CHARS_TO_IGNORE_UNSPECIFIED = "COMMON_CHARS_TO_IGNORE_UNSPECIFIED"
    NUMERIC = "NUMERIC"
    ALPHA_UPPER_CASE = "ALPHA_UPPER_CASE"
    ALPHA_LOWER_CASE = "ALPHA_LOWER_CASE"
    PUNCTUATION = "PUNCTUATION"
    WHITESPACE = "WHITESPACE"


@dataclass_json
@dataclass
class GooglePrivacyDlpV2CharsToIgnore:
    characters_to_skip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'charactersToSkip' }})
    common_characters_to_ignore: Optional[GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnoreEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commonCharactersToIgnore' }})
    
