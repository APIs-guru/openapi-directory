from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CryptoKeyConfig:
    r"""CryptoKeyConfig
    The crypto key configuration. This field is used by the Customer-managed encryption keys (CMEK) feature.
    """
    
    key_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyReference') }})
    
