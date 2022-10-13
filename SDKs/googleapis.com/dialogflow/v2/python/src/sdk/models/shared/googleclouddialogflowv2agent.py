from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

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
    api_version: Optional[GoogleCloudDialogflowV2AgentAPIVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiVersion' }})
    avatar_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avatarUri' }})
    classification_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classificationThreshold' }})
    default_language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultLanguageCode' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    enable_logging: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableLogging' }})
    match_mode: Optional[GoogleCloudDialogflowV2AgentMatchModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchMode' }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    supported_language_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportedLanguageCodes' }})
    tier: Optional[GoogleCloudDialogflowV2AgentTierEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tier' }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeZone' }})
    
