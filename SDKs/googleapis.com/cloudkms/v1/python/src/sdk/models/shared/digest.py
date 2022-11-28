from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Digest:
    r"""Digest
    A Digest holds a cryptographic message digest.
    """
    
    sha256: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha256') }})
    sha384: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha384') }})
    sha512: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha512') }})
    
