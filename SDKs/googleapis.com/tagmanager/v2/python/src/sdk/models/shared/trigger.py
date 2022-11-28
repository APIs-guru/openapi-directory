from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""Trigger
    Represents a Google Tag Manager Trigger
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    auto_event_filter: Optional[List[Condition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoEventFilter') }})
    check_validation: Optional[Parameter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkValidation') }})
    container_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerId') }})
    continuous_time_min_milliseconds: Optional[Parameter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('continuousTimeMinMilliseconds') }})
    custom_event_filter: Optional[List[Condition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customEventFilter') }})
    event_name: Optional[Parameter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventName') }})
    filter: Optional[List[Condition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fingerprint') }})
    horizontal_scroll_percentage_list: Optional[Parameter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('horizontalScrollPercentageList') }})
    interval: Optional[Parameter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interval') }})
    interval_seconds: Optional[Parameter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intervalSeconds') }})
    limit: Optional[Parameter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    max_timer_length_seconds: Optional[Parameter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxTimerLengthSeconds') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    parameter: Optional[List[Parameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameter') }})
    parent_folder_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentFolderId') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    selector: Optional[Parameter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selector') }})
    tag_manager_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagManagerUrl') }})
    total_time_min_milliseconds: Optional[Parameter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalTimeMinMilliseconds') }})
    trigger_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerId') }})
    type: Optional[TriggerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    unique_trigger_id: Optional[Parameter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uniqueTriggerId') }})
    vertical_scroll_percentage_list: Optional[Parameter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verticalScrollPercentageList') }})
    visibility_selector: Optional[Parameter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibilitySelector') }})
    visible_percentage_max: Optional[Parameter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visiblePercentageMax') }})
    visible_percentage_min: Optional[Parameter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visiblePercentageMin') }})
    wait_for_tags: Optional[Parameter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waitForTags') }})
    wait_for_tags_timeout: Optional[Parameter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waitForTagsTimeout') }})
    workspace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspaceId') }})
    
