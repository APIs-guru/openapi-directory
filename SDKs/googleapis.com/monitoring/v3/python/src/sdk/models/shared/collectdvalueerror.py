from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import status


@dataclass_json
@dataclass
class CollectdValueError:
    error: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'index' }})
    
