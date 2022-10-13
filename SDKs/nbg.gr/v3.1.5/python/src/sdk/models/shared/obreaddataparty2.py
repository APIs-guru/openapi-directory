from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import obparty2


@dataclass_json
@dataclass
class ObReadDataParty2:
    party: Optional[obparty2.ObParty2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Party' }})
    
