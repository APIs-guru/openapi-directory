from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDialogflowV2AgentAPIVersionEnum(str, Enum):
    API_VERSION_UNSPECIFIED = "API_VERSION_UNSPECIFIED"
    API_VERSION_V1 = "API_VERSION_V1"
    API_VERSION_V2 = "API_VERSION_V2"
    API_VERSION_V2_BETA_1 = "API_VERSION_V2_BETA_1"

class GoogleCloudDialogflowV2AgentMatchModeEnum(str, Enum):
    MATCH_MODE_UNSPECIFIED = "MATCH_MODE_UNSPECIFIED"
    MATCH_MODE_HYBRID = "MATCH_MODE_HYBRID"
    MATCH_MODE_ML_ONLY = "MATCH_MODE_ML_ONLY"

class GoogleCloudDialogflowV2AgentTierEnum(str, Enum):
    TIER_UNSPECIFIED = "TIER_UNSPECIFIED"
    TIER_STANDARD = "TIER_STANDARD"
    TIER_ENTERPRISE = "TIER_ENTERPRISE"
    TIER_ENTERPRISE_PLUS = "TIER_ENTERPRISE_PLUS"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2Agent:
    r"""GoogleCloudDialogflowV2Agent
    A Dialogflow agent is a virtual agent that handles conversations with your end-users. It is a natural language understanding module that understands the nuances of human language. Dialogflow translates end-user text or audio during a conversation to structured data that your apps and services can understand. You design and build a Dialogflow agent to handle the types of conversations required for your system. For more information about agents, see the [Agent guide](https://cloud.google.com/dialogflow/docs/agents-overview). 
    """
    
    api_version: Optional[GoogleCloudDialogflowV2AgentAPIVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiVersion') }})
    avatar_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avatarUri') }})
    classification_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classificationThreshold') }})
    default_language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultLanguageCode') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    enable_logging: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableLogging') }})
    match_mode: Optional[GoogleCloudDialogflowV2AgentMatchModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchMode') }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    supported_language_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportedLanguageCodes') }})
    tier: Optional[GoogleCloudDialogflowV2AgentTierEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tier') }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    
