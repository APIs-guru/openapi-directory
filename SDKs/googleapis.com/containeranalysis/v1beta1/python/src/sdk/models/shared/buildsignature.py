from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class BuildSignatureKeyTypeEnum(str, Enum):
    KEY_TYPE_UNSPECIFIED = "KEY_TYPE_UNSPECIFIED"
    PGP_ASCII_ARMORED = "PGP_ASCII_ARMORED"
    PKIX_PEM = "PKIX_PEM"


@dataclass_json
@dataclass
class BuildSignature:
    r"""BuildSignature
    Message encapsulating the signature of the verified build.
    """
    
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyId') }})
    key_type: Optional[BuildSignatureKeyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyType') }})
    public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicKey') }})
    signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signature') }})
    
