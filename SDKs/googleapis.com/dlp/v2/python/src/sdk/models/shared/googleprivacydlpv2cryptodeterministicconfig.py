from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2fieldid
from . import googleprivacydlpv2cryptokey
from . import googleprivacydlpv2infotype


@dataclass_json
@dataclass
class GooglePrivacyDlpV2CryptoDeterministicConfig:
    context: Optional[googleprivacydlpv2fieldid.GooglePrivacyDlpV2FieldID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context' }})
    crypto_key: Optional[googleprivacydlpv2cryptokey.GooglePrivacyDlpV2CryptoKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cryptoKey' }})
    surrogate_info_type: Optional[googleprivacydlpv2infotype.GooglePrivacyDlpV2InfoType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'surrogateInfoType' }})
    
