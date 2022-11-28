from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VulnerableHeaders:
    r"""VulnerableHeaders
    Information about vulnerable or missing HTTP Headers.
    """
    
    headers: Optional[List[Header]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    missing_headers: Optional[List[Header]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('missingHeaders') }})
    
