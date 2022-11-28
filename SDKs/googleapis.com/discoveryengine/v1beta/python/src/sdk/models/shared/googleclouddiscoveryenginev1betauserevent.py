from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDiscoveryengineV1betaUserEvent:
    r"""GoogleCloudDiscoveryengineV1betaUserEvent
    UserEvent captures all metadata information Discovery Engine API needs to know about how end users interact with customers' website.
    """
    
    attributes: Optional[dict[str, GoogleCloudDiscoveryengineV1betaCustomAttribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    attribution_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributionToken') }})
    completion_info: Optional[GoogleCloudDiscoveryengineV1betaCompletionInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completionInfo') }})
    direct_user_request: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directUserRequest') }})
    documents: Optional[List[GoogleCloudDiscoveryengineV1betaDocumentInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documents') }})
    event_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTime') }})
    event_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    media_info: Optional[GoogleCloudDiscoveryengineV1betaMediaInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediaInfo') }})
    page_info: Optional[GoogleCloudDiscoveryengineV1betaPageInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageInfo') }})
    panel: Optional[GoogleCloudDiscoveryengineV1betaPanelInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('panel') }})
    promotion_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotionIds') }})
    search_info: Optional[GoogleCloudDiscoveryengineV1betaSearchInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchInfo') }})
    session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionId') }})
    tag_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagIds') }})
    transaction_info: Optional[GoogleCloudDiscoveryengineV1betaTransactionInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionInfo') }})
    user_info: Optional[GoogleCloudDiscoveryengineV1betaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userInfo') }})
    user_pseudo_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userPseudoId') }})
    
