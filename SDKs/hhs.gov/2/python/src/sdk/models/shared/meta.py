from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import message
from . import pagination


@dataclass_json
@dataclass
class Meta:
    messages: Optional[List[message.Message]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messages' }})
    pagination: Optional[pagination.Pagination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
