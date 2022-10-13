from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import pubsub


@dataclass_json
@dataclass
class Transport:
    pubsub: Optional[pubsub.Pubsub] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pubsub' }})
    
