from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1ListAnswerRecordsResponse:
    r"""GoogleCloudDialogflowV2beta1ListAnswerRecordsResponse
    Response message for AnswerRecords.ListAnswerRecords.
    """
    
    answer_records: Optional[List[GoogleCloudDialogflowV2beta1AnswerRecord]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answerRecords') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
