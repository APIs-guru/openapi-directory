from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1ListConversationProfilesResponse:
    r"""GoogleCloudDialogflowV2beta1ListConversationProfilesResponse
    The response message for ConversationProfiles.ListConversationProfiles.
    """
    
    conversation_profiles: Optional[List[GoogleCloudDialogflowV2beta1ConversationProfile]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversationProfiles') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
