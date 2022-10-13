from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2cryptokey


@dataclass_json
@dataclass
class GooglePrivacyDlpV2CryptoHashConfig:
    crypto_key: Optional[googleprivacydlpv2cryptokey.GooglePrivacyDlpV2CryptoKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cryptoKey' }})
    
