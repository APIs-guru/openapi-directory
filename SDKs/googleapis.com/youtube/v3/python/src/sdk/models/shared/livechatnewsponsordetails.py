from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LiveChatNewSponsorDetails:
    is_upgrade: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isUpgrade' }})
    member_level_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memberLevelName' }})
    
