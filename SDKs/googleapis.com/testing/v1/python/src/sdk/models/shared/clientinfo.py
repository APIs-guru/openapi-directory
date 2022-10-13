from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import clientinfodetail


@dataclass_json
@dataclass
class ClientInfo:
    client_info_details: Optional[List[clientinfodetail.ClientInfoDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientInfoDetails' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
