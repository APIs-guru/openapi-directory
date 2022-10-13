from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import acceleratortype


@dataclass_json
@dataclass
class ListAcceleratorTypesResponse:
    accelerator_types: Optional[List[acceleratortype.AcceleratorType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acceleratorTypes' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
