from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import contactgroupresponse


@dataclass_json
@dataclass
class BatchGetContactGroupsResponse:
    responses: Optional[List[contactgroupresponse.ContactGroupResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responses' }})
    
