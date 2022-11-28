from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CustomRichMediaEvents:
    r"""CustomRichMediaEvents
    Represents a Custom Rich Media Events group.
    """
    
    filtered_event_ids: Optional[List[DimensionValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filteredEventIds') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
