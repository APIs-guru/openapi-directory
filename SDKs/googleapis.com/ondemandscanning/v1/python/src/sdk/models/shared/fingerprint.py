from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Fingerprint:
    v1_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'v1Name' }})
    v2_blob: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'v2Blob' }})
    v2_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'v2Name' }})
    
