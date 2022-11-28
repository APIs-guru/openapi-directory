from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WrappingPublicKey:
    r"""WrappingPublicKey
    The public key component of the wrapping key. For details of the type of key this public key corresponds to, see the ImportMethod.
    """
    
    pem: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pem') }})
    
