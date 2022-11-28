from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListStudentsResponse:
    r"""ListStudentsResponse
    Response when listing students.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    students: Optional[List[Student]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('students') }})
    
