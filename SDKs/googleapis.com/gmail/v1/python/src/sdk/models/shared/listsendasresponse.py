from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sendas


@dataclass_json
@dataclass
class ListSendAsResponse:
    send_as: Optional[List[sendas.SendAs]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sendAs' }})
    
