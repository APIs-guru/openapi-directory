from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class HashTypeEnum(str, Enum):
    NONE = "NONE"
    SHA256 = "SHA256"
    MD5 = "MD5"


@dataclass_json
@dataclass
class Hash:
    r"""Hash
    Container message for hash values.
    """
    
    type: Optional[HashTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
