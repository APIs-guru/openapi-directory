from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import obparty2


@dataclass_json
@dataclass
class ObReadDataParty3:
    party: Optional[List[obparty2.ObParty2]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Party' }})
    
