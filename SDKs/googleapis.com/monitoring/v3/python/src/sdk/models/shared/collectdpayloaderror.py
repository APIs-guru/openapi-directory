from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import status
from . import collectdvalueerror


@dataclass_json
@dataclass
class CollectdPayloadError:
    error: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'index' }})
    value_errors: Optional[List[collectdvalueerror.CollectdValueError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueErrors' }})
    
