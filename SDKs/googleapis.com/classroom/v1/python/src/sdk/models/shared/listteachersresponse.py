from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import teacher


@dataclass_json
@dataclass
class ListTeachersResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    teachers: Optional[List[teacher.Teacher]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teachers' }})
    
