from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequestUserEventRejoinScopeEnum(str, Enum):
    USER_EVENT_REJOIN_SCOPE_UNSPECIFIED = "USER_EVENT_REJOIN_SCOPE_UNSPECIFIED"
    JOINED_EVENTS = "JOINED_EVENTS"
    UNJOINED_EVENTS = "UNJOINED_EVENTS"


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequest:
    r"""GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequest
    Request message for CatalogRejoin method.
    """
    
    user_event_rejoin_scope: Optional[GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequestUserEventRejoinScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userEventRejoinScope') }})
    
