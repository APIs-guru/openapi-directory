from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2fieldid
from . import googleprivacydlpv2cryptokey
from . import googleprivacydlpv2infotype

class GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnum(str, Enum):
    FFX_COMMON_NATIVE_ALPHABET_UNSPECIFIED = "FFX_COMMON_NATIVE_ALPHABET_UNSPECIFIED"
    NUMERIC = "NUMERIC"
    HEXADECIMAL = "HEXADECIMAL"
    UPPER_CASE_ALPHA_NUMERIC = "UPPER_CASE_ALPHA_NUMERIC"
    ALPHA_NUMERIC = "ALPHA_NUMERIC"


@dataclass_json
@dataclass
class GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig:
    common_alphabet: Optional[GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commonAlphabet' }})
    context: Optional[googleprivacydlpv2fieldid.GooglePrivacyDlpV2FieldID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context' }})
    crypto_key: Optional[googleprivacydlpv2cryptokey.GooglePrivacyDlpV2CryptoKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cryptoKey' }})
    custom_alphabet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customAlphabet' }})
    radix: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radix' }})
    surrogate_info_type: Optional[googleprivacydlpv2infotype.GooglePrivacyDlpV2InfoType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'surrogateInfoType' }})
    
