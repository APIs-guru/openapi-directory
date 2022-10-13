from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class RuntimeEnvironmentEnum(str, Enum):
    ENVIRONMENT_UNSPECIFIED = "ENVIRONMENT_UNSPECIFIED"
    GEN_1 = "GEN_1"
    GEN_2 = "GEN_2"

class RuntimeStageEnum(str, Enum):
    RUNTIME_STAGE_UNSPECIFIED = "RUNTIME_STAGE_UNSPECIFIED"
    DEVELOPMENT = "DEVELOPMENT"
    ALPHA = "ALPHA"
    BETA = "BETA"
    GA = "GA"
    DEPRECATED = "DEPRECATED"
    DECOMMISSIONED = "DECOMMISSIONED"


@dataclass_json
@dataclass
class Runtime:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    environment: Optional[RuntimeEnvironmentEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    stage: Optional[RuntimeStageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stage' }})
    warnings: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warnings' }})
    
