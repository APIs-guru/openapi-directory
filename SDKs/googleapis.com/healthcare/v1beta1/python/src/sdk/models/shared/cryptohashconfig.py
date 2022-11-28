from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CryptoHashConfig:
    r"""CryptoHashConfig
    Pseudonymization method that generates surrogates via cryptographic hashing. Uses SHA-256. Outputs a base64-encoded representation of the hashed output. For example, `L7k0BHmF1ha5U3NfGykjro4xWi1MPVQPjhMAZbSV9mM=`.
    """
    
    crypto_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cryptoKey') }})
    kms_wrapped: Optional[KmsWrappedCryptoKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsWrapped') }})
    
