from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDiscoveryengineV1alphaUserEvent:
    r"""GoogleCloudDiscoveryengineV1alphaUserEvent
    UserEvent captures all metadata information Discovery Engine API needs to know about how end users interact with customers' website.
    """
    
    attributes: Optional[dict[str, GoogleCloudDiscoveryengineV1alphaCustomAttribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    attribution_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributionToken') }})
    completion_info: Optional[GoogleCloudDiscoveryengineV1alphaCompletionInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completionInfo') }})
    direct_user_request: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directUserRequest') }})
    documents: Optional[List[GoogleCloudDiscoveryengineV1alphaDocumentInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documents') }})
    event_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTime') }})
    event_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    media_info: Optional[GoogleCloudDiscoveryengineV1alphaMediaInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediaInfo') }})
    page_info: Optional[GoogleCloudDiscoveryengineV1alphaPageInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageInfo') }})
    panel: Optional[GoogleCloudDiscoveryengineV1alphaPanelInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('panel') }})
    promotion_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotionIds') }})
    search_info: Optional[GoogleCloudDiscoveryengineV1alphaSearchInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchInfo') }})
    session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionId') }})
    tag_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagIds') }})
    transaction_info: Optional[GoogleCloudDiscoveryengineV1alphaTransactionInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionInfo') }})
    user_info: Optional[GoogleCloudDiscoveryengineV1alphaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userInfo') }})
    user_pseudo_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userPseudoId') }})
    
