from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Digest:
    r"""Digest
    Digest information.
    """
    
    algo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('algo') }})
    digest_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('digestBytes') }})
    
