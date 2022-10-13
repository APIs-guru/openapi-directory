from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import studentsubmission


@dataclass_json
@dataclass
class ListStudentSubmissionsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    student_submissions: Optional[List[studentsubmission.StudentSubmission]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'studentSubmissions' }})
    
