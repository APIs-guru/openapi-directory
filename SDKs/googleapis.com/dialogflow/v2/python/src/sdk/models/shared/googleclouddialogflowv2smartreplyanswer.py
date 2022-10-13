from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2SmartReplyAnswer:
    answer_record: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answerRecord' }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidence' }})
    reply: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reply' }})
    
