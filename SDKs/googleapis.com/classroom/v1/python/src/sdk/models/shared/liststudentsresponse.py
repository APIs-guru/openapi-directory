from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import student


@dataclass_json
@dataclass
class ListStudentsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    students: Optional[List[student.Student]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'students' }})
    
