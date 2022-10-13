from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2conversationdataset


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2ListConversationDatasetsResponse:
    conversation_datasets: Optional[List[googleclouddialogflowv2conversationdataset.GoogleCloudDialogflowV2ConversationDataset]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversationDatasets' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
