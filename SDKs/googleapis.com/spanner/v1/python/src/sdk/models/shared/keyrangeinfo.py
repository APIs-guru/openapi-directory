from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import contextvalue
from . import localizedstring
from . import localizedstring
from . import localizedstring


@dataclass_json
@dataclass
class KeyRangeInfo:
    context_values: Optional[List[contextvalue.ContextValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contextValues' }})
    end_key_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endKeyIndex' }})
    info: Optional[localizedstring.LocalizedString] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'info' }})
    keys_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keysCount' }})
    metric: Optional[localizedstring.LocalizedString] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metric' }})
    start_key_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startKeyIndex' }})
    time_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeOffset' }})
    unit: Optional[localizedstring.LocalizedString] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
