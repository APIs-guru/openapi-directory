from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class KeyRangeInfo:
    r"""KeyRangeInfo
    A message representing information for a key range (possibly one key).
    """
    
    context_values: Optional[List[ContextValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contextValues') }})
    end_key_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endKeyIndex') }})
    info: Optional[LocalizedString] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('info') }})
    keys_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keysCount') }})
    metric: Optional[LocalizedString] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metric') }})
    start_key_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startKeyIndex') }})
    time_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeOffset') }})
    unit: Optional[LocalizedString] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
