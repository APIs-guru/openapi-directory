from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2ConversationInfo:
    r"""GoogleCloudDialogflowV2ConversationInfo
    Represents metadata of a conversation.
    """
    
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    
