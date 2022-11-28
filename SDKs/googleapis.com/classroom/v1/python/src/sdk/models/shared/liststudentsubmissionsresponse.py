from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListStudentSubmissionsResponse:
    r"""ListStudentSubmissionsResponse
    Response when listing student submissions.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    student_submissions: Optional[List[StudentSubmission]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('studentSubmissions') }})
    
