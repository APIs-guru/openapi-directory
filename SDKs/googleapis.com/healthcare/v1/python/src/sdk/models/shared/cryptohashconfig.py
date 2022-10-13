from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import kmswrappedcryptokey


@dataclass_json
@dataclass
class CryptoHashConfig:
    crypto_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cryptoKey' }})
    kms_wrapped: Optional[kmswrappedcryptokey.KmsWrappedCryptoKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsWrapped' }})
    
