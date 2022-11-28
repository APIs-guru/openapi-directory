from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ExistenceFilter:
    r"""ExistenceFilter
    A digest of all the documents that match a given target.
    """
    
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    target_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetId') }})
    
