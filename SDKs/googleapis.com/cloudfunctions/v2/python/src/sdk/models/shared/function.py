from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import buildconfig
from . import eventtrigger
from . import serviceconfig
from . import googlecloudfunctionsv2statemessage

class FunctionEnvironmentEnum(str, Enum):
    ENVIRONMENT_UNSPECIFIED = "ENVIRONMENT_UNSPECIFIED"
    GEN_1 = "GEN_1"
    GEN_2 = "GEN_2"

class FunctionStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    FAILED = "FAILED"
    DEPLOYING = "DEPLOYING"
    DELETING = "DELETING"
    UNKNOWN = "UNKNOWN"


@dataclass_json
@dataclass
class Function:
    build_config: Optional[buildconfig.BuildConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildConfig' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    environment: Optional[FunctionEnvironmentEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    event_trigger: Optional[eventtrigger.EventTrigger] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventTrigger' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    service_config: Optional[serviceconfig.ServiceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceConfig' }})
    state: Optional[FunctionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    state_messages: Optional[List[googlecloudfunctionsv2statemessage.GoogleCloudFunctionsV2StateMessage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateMessages' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
