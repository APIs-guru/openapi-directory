from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import calltoaction
from . import localpostevent
from . import mediaitem
from . import localpostoffer

class LocalPostAlertTypeEnum(str, Enum):
    ALERT_TYPE_UNSPECIFIED = "ALERT_TYPE_UNSPECIFIED"
    COVID_19 = "COVID_19"

class LocalPostStateEnum(str, Enum):
    LOCAL_POST_STATE_UNSPECIFIED = "LOCAL_POST_STATE_UNSPECIFIED"
    REJECTED = "REJECTED"
    LIVE = "LIVE"
    PROCESSING = "PROCESSING"

class LocalPostTopicTypeEnum(str, Enum):
    LOCAL_POST_TOPIC_TYPE_UNSPECIFIED = "LOCAL_POST_TOPIC_TYPE_UNSPECIFIED"
    STANDARD = "STANDARD"
    EVENT = "EVENT"
    OFFER = "OFFER"
    ALERT = "ALERT"


@dataclass_json
@dataclass
class LocalPost:
    alert_type: Optional[LocalPostAlertTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alertType' }})
    call_to_action: Optional[calltoaction.CallToAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'callToAction' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    event: Optional[localpostevent.LocalPostEvent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    media: Optional[List[mediaitem.MediaItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'media' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    offer: Optional[localpostoffer.LocalPostOffer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offer' }})
    search_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchUrl' }})
    state: Optional[LocalPostStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    topic_type: Optional[LocalPostTopicTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topicType' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
