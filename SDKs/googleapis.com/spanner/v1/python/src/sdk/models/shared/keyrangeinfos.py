from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import keyrangeinfo


@dataclass_json
@dataclass
class KeyRangeInfos:
    infos: Optional[List[keyrangeinfo.KeyRangeInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'infos' }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalSize' }})
    
