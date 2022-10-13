from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import personresponse


@dataclass_json
@dataclass
class BatchUpdateContactsResponse:
    update_result: Optional[dict[str, personresponse.PersonResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateResult' }})
    
