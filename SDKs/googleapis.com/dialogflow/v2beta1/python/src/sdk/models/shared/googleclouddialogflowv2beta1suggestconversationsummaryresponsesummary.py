from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponseSummary:
    r"""GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponseSummary
    Generated summary for a conversation.
    """
    
    answer_record: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answerRecord') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    text_sections: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textSections') }})
    
