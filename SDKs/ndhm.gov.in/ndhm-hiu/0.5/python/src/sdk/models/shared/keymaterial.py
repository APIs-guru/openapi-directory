from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class KeyMaterial:
    crypto_alg: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cryptoAlg') }})
    curve: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('curve') }})
    dh_public_key: KeyObject = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dhPublicKey') }})
    nonce: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonce') }})
    
