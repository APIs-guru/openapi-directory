from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2ListConversationDatasetsResponse:
    r"""GoogleCloudDialogflowV2ListConversationDatasetsResponse
    The response message for ConversationDatasets.ListConversationDatasets.
    """
    
    conversation_datasets: Optional[List[GoogleCloudDialogflowV2ConversationDataset]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversationDatasets') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
