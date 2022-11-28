from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Compliance:
    r"""Compliance
    Contains compliance information about a security standard indicating unmet recommendations.
    """
    
    ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids') }})
    standard: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('standard') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
