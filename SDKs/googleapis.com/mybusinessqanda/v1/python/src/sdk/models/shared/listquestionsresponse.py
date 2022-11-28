from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListQuestionsResponse:
    r"""ListQuestionsResponse
    Response message for QuestionsAndAnswers.ListQuestions
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    questions: Optional[List[Question]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('questions') }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    
