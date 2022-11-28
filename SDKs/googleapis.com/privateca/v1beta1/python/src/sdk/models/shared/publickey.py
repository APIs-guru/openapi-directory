from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PublicKeyTypeEnum(str, Enum):
    KEY_TYPE_UNSPECIFIED = "KEY_TYPE_UNSPECIFIED"
    PEM_RSA_KEY = "PEM_RSA_KEY"
    PEM_EC_KEY = "PEM_EC_KEY"


@dataclass_json
@dataclass
class PublicKey:
    r"""PublicKey
    A PublicKey describes a public key.
    """
    
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    type: Optional[PublicKeyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
