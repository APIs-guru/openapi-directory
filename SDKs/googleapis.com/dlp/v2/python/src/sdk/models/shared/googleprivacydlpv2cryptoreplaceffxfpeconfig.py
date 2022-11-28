from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnum(str, Enum):
    FFX_COMMON_NATIVE_ALPHABET_UNSPECIFIED = "FFX_COMMON_NATIVE_ALPHABET_UNSPECIFIED"
    NUMERIC = "NUMERIC"
    HEXADECIMAL = "HEXADECIMAL"
    UPPER_CASE_ALPHA_NUMERIC = "UPPER_CASE_ALPHA_NUMERIC"
    ALPHA_NUMERIC = "ALPHA_NUMERIC"


@dataclass_json
@dataclass
class GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig:
    r"""GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig
    Replaces an identifier with a surrogate using Format Preserving Encryption (FPE) with the FFX mode of operation; however when used in the `ReidentifyContent` API method, it serves the opposite function by reversing the surrogate back into the original identifier. The identifier must be encoded as ASCII. For a given crypto key and context, the same identifier will be replaced with the same surrogate. Identifiers must be at least two characters long. In the case that the identifier is the empty string, it will be skipped. See https://cloud.google.com/dlp/docs/pseudonymization to learn more. Note: We recommend using CryptoDeterministicConfig for all use cases which do not require preserving the input alphabet space and size, plus warrant referential integrity.
    """
    
    common_alphabet: Optional[GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commonAlphabet') }})
    context: Optional[GooglePrivacyDlpV2FieldID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    crypto_key: Optional[GooglePrivacyDlpV2CryptoKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cryptoKey') }})
    custom_alphabet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customAlphabet') }})
    radix: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radix') }})
    surrogate_info_type: Optional[GooglePrivacyDlpV2InfoType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('surrogateInfoType') }})
    
