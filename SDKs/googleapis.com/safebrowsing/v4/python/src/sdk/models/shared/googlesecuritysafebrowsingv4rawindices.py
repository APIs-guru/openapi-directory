from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleSecuritySafebrowsingV4RawIndices:
    indices: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indices' }})
    
