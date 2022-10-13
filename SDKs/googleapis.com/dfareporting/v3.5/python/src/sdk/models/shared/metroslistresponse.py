from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import metro


@dataclass_json
@dataclass
class MetrosListResponse:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    metros: Optional[List[metro.Metro]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metros' }})
    
