from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ZoneChildContainer:
    nickname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nickname' }})
    public_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicId' }})
    
