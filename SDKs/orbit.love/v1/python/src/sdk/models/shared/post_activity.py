from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PostActivityActivityTypeEnum(str, Enum):
    CONTENT = "content"


@dataclass_json
@dataclass
class PostActivity:
    activity_type: PostActivityActivityTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activity_type' }})
    occurred_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'occurred_at' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
