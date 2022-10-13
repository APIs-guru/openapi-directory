from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import conversionstatus


@dataclass_json
@dataclass
class ConversionsBatchUpdateResponse:
    has_failures: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasFailures' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    status: Optional[List[conversionstatus.ConversionStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
