from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PullRequest:
    return_immediately: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnImmediately' }})
    subscription: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscription' }})
    
