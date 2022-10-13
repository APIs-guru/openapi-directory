from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import identity
from . import member


@dataclass_json
@dataclass
class MemberAndIdentity:
    identity: Optional[identity.Identity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identity' }})
    member: Optional[member.Member] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'member' }})
    
