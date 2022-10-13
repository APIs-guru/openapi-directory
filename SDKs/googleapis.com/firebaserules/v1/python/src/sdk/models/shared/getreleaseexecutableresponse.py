from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GetReleaseExecutableResponseExecutableVersionEnum(str, Enum):
    RELEASE_EXECUTABLE_VERSION_UNSPECIFIED = "RELEASE_EXECUTABLE_VERSION_UNSPECIFIED"
    FIREBASE_RULES_EXECUTABLE_V1 = "FIREBASE_RULES_EXECUTABLE_V1"
    FIREBASE_RULES_EXECUTABLE_V2 = "FIREBASE_RULES_EXECUTABLE_V2"

class GetReleaseExecutableResponseLanguageEnum(str, Enum):
    LANGUAGE_UNSPECIFIED = "LANGUAGE_UNSPECIFIED"
    FIREBASE_RULES = "FIREBASE_RULES"
    EVENT_FLOW_TRIGGERS = "EVENT_FLOW_TRIGGERS"


@dataclass_json
@dataclass
class GetReleaseExecutableResponse:
    executable: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executable' }})
    executable_version: Optional[GetReleaseExecutableResponseExecutableVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executableVersion' }})
    language: Optional[GetReleaseExecutableResponseLanguageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    ruleset_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rulesetName' }})
    sync_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syncTime' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
