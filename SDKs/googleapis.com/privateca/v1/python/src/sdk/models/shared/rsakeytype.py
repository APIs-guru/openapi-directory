from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RsaKeyType:
    r"""RsaKeyType
    Describes an RSA key that may be used in a Certificate issued from a CaPool.
    """
    
    max_modulus_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxModulusSize') }})
    min_modulus_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minModulusSize') }})
    
