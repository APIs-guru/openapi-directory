from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1answerrecord


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1ListAnswerRecordsResponse:
    answer_records: Optional[List[googleclouddialogflowv2beta1answerrecord.GoogleCloudDialogflowV2beta1AnswerRecord]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answerRecords' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
