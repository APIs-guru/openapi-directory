from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2kmswrappedcryptokey
from . import googleprivacydlpv2transientcryptokey
from . import googleprivacydlpv2unwrappedcryptokey


@dataclass_json
@dataclass
class GooglePrivacyDlpV2CryptoKey:
    kms_wrapped: Optional[googleprivacydlpv2kmswrappedcryptokey.GooglePrivacyDlpV2KmsWrappedCryptoKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsWrapped' }})
    transient: Optional[googleprivacydlpv2transientcryptokey.GooglePrivacyDlpV2TransientCryptoKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transient' }})
    unwrapped: Optional[googleprivacydlpv2unwrappedcryptokey.GooglePrivacyDlpV2UnwrappedCryptoKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unwrapped' }})
    
