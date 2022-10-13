from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GooglePrivacyDlpV2Regex:
    group_indexes: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupIndexes' }})
    pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pattern' }})
    
