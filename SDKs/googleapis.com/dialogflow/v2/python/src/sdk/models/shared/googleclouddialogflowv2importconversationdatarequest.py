from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2ImportConversationDataRequest:
    r"""GoogleCloudDialogflowV2ImportConversationDataRequest
    The request message for ConversationDatasets.ImportConversationData.
    """
    
    input_config: Optional[GoogleCloudDialogflowV2InputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputConfig') }})
    
