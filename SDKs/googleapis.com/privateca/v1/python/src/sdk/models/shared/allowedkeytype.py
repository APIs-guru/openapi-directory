from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AllowedKeyType:
    r"""AllowedKeyType
    Describes a \"type\" of key that may be used in a Certificate issued from a CaPool. Note that a single AllowedKeyType may refer to either a fully-qualified key algorithm, such as RSA 4096, or a family of key algorithms, such as any RSA key.
    """
    
    elliptic_curve: Optional[EcKeyType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ellipticCurve') }})
    rsa: Optional[RsaKeyType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rsa') }})
    
