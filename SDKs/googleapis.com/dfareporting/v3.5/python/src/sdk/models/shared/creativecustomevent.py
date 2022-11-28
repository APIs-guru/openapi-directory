from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CreativeCustomEventAdvertiserCustomEventTypeEnum(str, Enum):
    ADVERTISER_EVENT_TIMER = "ADVERTISER_EVENT_TIMER"
    ADVERTISER_EVENT_EXIT = "ADVERTISER_EVENT_EXIT"
    ADVERTISER_EVENT_COUNTER = "ADVERTISER_EVENT_COUNTER"

class CreativeCustomEventArtworkTypeEnum(str, Enum):
    ARTWORK_TYPE_FLASH = "ARTWORK_TYPE_FLASH"
    ARTWORK_TYPE_HTML5 = "ARTWORK_TYPE_HTML5"
    ARTWORK_TYPE_MIXED = "ARTWORK_TYPE_MIXED"
    ARTWORK_TYPE_IMAGE = "ARTWORK_TYPE_IMAGE"

class CreativeCustomEventTargetTypeEnum(str, Enum):
    TARGET_BLANK = "TARGET_BLANK"
    TARGET_TOP = "TARGET_TOP"
    TARGET_SELF = "TARGET_SELF"
    TARGET_PARENT = "TARGET_PARENT"
    TARGET_POPUP = "TARGET_POPUP"


@dataclass_json
@dataclass
class CreativeCustomEvent:
    r"""CreativeCustomEvent
    Creative Custom Event.
    """
    
    advertiser_custom_event_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserCustomEventId') }})
    advertiser_custom_event_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserCustomEventName') }})
    advertiser_custom_event_type: Optional[CreativeCustomEventAdvertiserCustomEventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserCustomEventType') }})
    artwork_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artworkLabel') }})
    artwork_type: Optional[CreativeCustomEventArtworkTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artworkType') }})
    exit_click_through_url: Optional[CreativeClickThroughURL] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exitClickThroughUrl') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    popup_window_properties: Optional[PopupWindowProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('popupWindowProperties') }})
    target_type: Optional[CreativeCustomEventTargetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetType') }})
    video_reporting_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoReportingId') }})
    
