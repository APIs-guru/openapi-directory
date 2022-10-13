from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import channel


@dataclass_json
@dataclass
class Candidate:
    candidate_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidateUrl' }})
    channels: Optional[List[channel.Channel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channels' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    order_on_ballot: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderOnBallot' }})
    party: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'party' }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone' }})
    photo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'photoUrl' }})
    
