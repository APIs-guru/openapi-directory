from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2SmartReplyAnswer:
    r"""GoogleCloudDialogflowV2SmartReplyAnswer
    Represents a smart reply answer.
    """
    
    answer_record: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answerRecord') }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence') }})
    reply: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reply') }})
    
