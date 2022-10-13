from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2answerrecord


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2ListAnswerRecordsResponse:
    answer_records: Optional[List[googleclouddialogflowv2answerrecord.GoogleCloudDialogflowV2AnswerRecord]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answerRecords' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
