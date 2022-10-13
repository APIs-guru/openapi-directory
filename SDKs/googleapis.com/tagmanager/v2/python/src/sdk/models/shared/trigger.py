from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import condition
from . import parameter
from . import parameter
from . import condition
from . import parameter
from . import condition
from . import parameter
from . import parameter
from . import parameter
from . import parameter
from . import parameter
from . import parameter
from . import parameter
from . import parameter
from . import parameter
from . import parameter
from . import parameter
from . import parameter
from . import parameter
from . import parameter
from . import parameter

class TriggerTypeEnum(str, Enum):
    EVENT_TYPE_UNSPECIFIED = "eventTypeUnspecified"
    PAGEVIEW = "pageview"
    DOM_READY = "domReady"
    WINDOW_LOADED = "windowLoaded"
    CUSTOM_EVENT = "customEvent"
    TRIGGER_GROUP = "triggerGroup"
    INIT = "init"
    CONSENT_INIT = "consentInit"
    SERVER_PAGEVIEW = "serverPageview"
    ALWAYS = "always"
    FIREBASE_APP_EXCEPTION = "firebaseAppException"
    FIREBASE_APP_UPDATE = "firebaseAppUpdate"
    FIREBASE_CAMPAIGN = "firebaseCampaign"
    FIREBASE_FIRST_OPEN = "firebaseFirstOpen"
    FIREBASE_IN_APP_PURCHASE = "firebaseInAppPurchase"
    FIREBASE_NOTIFICATION_DISMISS = "firebaseNotificationDismiss"
    FIREBASE_NOTIFICATION_FOREGROUND = "firebaseNotificationForeground"
    FIREBASE_NOTIFICATION_OPEN = "firebaseNotificationOpen"
    FIREBASE_NOTIFICATION_RECEIVE = "firebaseNotificationReceive"
    FIREBASE_OS_UPDATE = "firebaseOsUpdate"
    FIREBASE_SESSION_START = "firebaseSessionStart"
    FIREBASE_USER_ENGAGEMENT = "firebaseUserEngagement"
    FORM_SUBMISSION = "formSubmission"
    CLICK = "click"
    LINK_CLICK = "linkClick"
    JS_ERROR = "jsError"
    HISTORY_CHANGE = "historyChange"
    TIMER = "timer"
    AMP_CLICK = "ampClick"
    AMP_TIMER = "ampTimer"
    AMP_SCROLL = "ampScroll"
    AMP_VISIBILITY = "ampVisibility"
    YOU_TUBE_VIDEO = "youTubeVideo"
    SCROLL_DEPTH = "scrollDepth"
    ELEMENT_VISIBILITY = "elementVisibility"


@dataclass_json
@dataclass
class Trigger:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    auto_event_filter: Optional[List[condition.Condition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoEventFilter' }})
    check_validation: Optional[parameter.Parameter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checkValidation' }})
    container_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerId' }})
    continuous_time_min_milliseconds: Optional[parameter.Parameter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'continuousTimeMinMilliseconds' }})
    custom_event_filter: Optional[List[condition.Condition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customEventFilter' }})
    event_name: Optional[parameter.Parameter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventName' }})
    filter: Optional[List[condition.Condition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fingerprint' }})
    horizontal_scroll_percentage_list: Optional[parameter.Parameter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'horizontalScrollPercentageList' }})
    interval: Optional[parameter.Parameter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interval' }})
    interval_seconds: Optional[parameter.Parameter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intervalSeconds' }})
    limit: Optional[parameter.Parameter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    max_timer_length_seconds: Optional[parameter.Parameter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxTimerLengthSeconds' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    parameter: Optional[List[parameter.Parameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameter' }})
    parent_folder_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentFolderId' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    selector: Optional[parameter.Parameter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selector' }})
    tag_manager_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagManagerUrl' }})
    total_time_min_milliseconds: Optional[parameter.Parameter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalTimeMinMilliseconds' }})
    trigger_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerId' }})
    type: Optional[TriggerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    unique_trigger_id: Optional[parameter.Parameter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uniqueTriggerId' }})
    vertical_scroll_percentage_list: Optional[parameter.Parameter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verticalScrollPercentageList' }})
    visibility_selector: Optional[parameter.Parameter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visibilitySelector' }})
    visible_percentage_max: Optional[parameter.Parameter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visiblePercentageMax' }})
    visible_percentage_min: Optional[parameter.Parameter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visiblePercentageMin' }})
    wait_for_tags: Optional[parameter.Parameter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'waitForTags' }})
    wait_for_tags_timeout: Optional[parameter.Parameter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'waitForTagsTimeout' }})
    workspace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workspaceId' }})
    
