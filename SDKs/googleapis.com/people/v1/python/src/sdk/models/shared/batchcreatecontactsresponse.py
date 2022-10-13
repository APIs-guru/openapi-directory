from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import personresponse


@dataclass_json
@dataclass
class BatchCreateContactsResponse:
    created_people: Optional[List[personresponse.PersonResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdPeople' }})
    
