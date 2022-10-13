from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SessionUserInfo:
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserId' }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserName' }})
    
