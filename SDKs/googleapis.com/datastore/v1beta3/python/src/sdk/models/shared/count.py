from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Count:
    r"""Count
    Count of entities that match the query. The `COUNT(*)` aggregation function operates on the entire entity so it does not require a field reference.
    """
    
    up_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upTo') }})
    
