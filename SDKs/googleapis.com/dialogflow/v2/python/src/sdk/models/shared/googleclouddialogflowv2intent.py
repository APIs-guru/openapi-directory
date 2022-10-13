from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2intentfollowupintentinfo
from . import googleclouddialogflowv2intentmessage
from . import googleclouddialogflowv2context
from . import googleclouddialogflowv2intentparameter
from . import googleclouddialogflowv2intenttrainingphrase

class GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum(str, Enum):
    PLATFORM_UNSPECIFIED = "PLATFORM_UNSPECIFIED"
    FACEBOOK = "FACEBOOK"
    SLACK = "SLACK"
    TELEGRAM = "TELEGRAM"
    KIK = "KIK"
    SKYPE = "SKYPE"
    LINE = "LINE"
    VIBER = "VIBER"
    ACTIONS_ON_GOOGLE = "ACTIONS_ON_GOOGLE"
    GOOGLE_HANGOUTS = "GOOGLE_HANGOUTS"

class GoogleCloudDialogflowV2IntentWebhookStateEnum(str, Enum):
    WEBHOOK_STATE_UNSPECIFIED = "WEBHOOK_STATE_UNSPECIFIED"
    WEBHOOK_STATE_ENABLED = "WEBHOOK_STATE_ENABLED"
    WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING = "WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2Intent:
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    default_response_platforms: Optional[List[GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultResponsePlatforms' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    end_interaction: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endInteraction' }})
    events: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    followup_intent_info: Optional[List[googleclouddialogflowv2intentfollowupintentinfo.GoogleCloudDialogflowV2IntentFollowupIntentInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'followupIntentInfo' }})
    input_context_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputContextNames' }})
    is_fallback: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isFallback' }})
    live_agent_handoff: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'liveAgentHandoff' }})
    messages: Optional[List[googleclouddialogflowv2intentmessage.GoogleCloudDialogflowV2IntentMessage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messages' }})
    ml_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mlDisabled' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    output_contexts: Optional[List[googleclouddialogflowv2context.GoogleCloudDialogflowV2Context]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputContexts' }})
    parameters: Optional[List[googleclouddialogflowv2intentparameter.GoogleCloudDialogflowV2IntentParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    parent_followup_intent_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentFollowupIntentName' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    reset_contexts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resetContexts' }})
    root_followup_intent_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rootFollowupIntentName' }})
    training_phrases: Optional[List[googleclouddialogflowv2intenttrainingphrase.GoogleCloudDialogflowV2IntentTrainingPhrase]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trainingPhrases' }})
    webhook_state: Optional[GoogleCloudDialogflowV2IntentWebhookStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhookState' }})
    
