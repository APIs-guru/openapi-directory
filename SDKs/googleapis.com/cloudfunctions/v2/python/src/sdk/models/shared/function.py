from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class FunctionStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    FAILED = "FAILED"
    DEPLOYING = "DEPLOYING"
    DELETING = "DELETING"
    UNKNOWN = "UNKNOWN"

class FunctionEnvironmentEnum(str, Enum):
    ENVIRONMENT_UNSPECIFIED = "ENVIRONMENT_UNSPECIFIED"
    GEN_1 = "GEN_1"
    GEN_2 = "GEN_2"


@dataclass_json
@dataclass
class Function:
    r"""Function
    Describes a Cloud Function that contains user computation executed in response to an event. It encapsulates function and trigger configurations.
    """
    
    build_config: Optional[BuildConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildConfig') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    environment: Optional[FunctionEnvironmentEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    event_trigger: Optional[EventTrigger] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTrigger') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    service_config: Optional[ServiceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceConfig') }})
    state: Optional[FunctionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    state_messages: Optional[List[GoogleCloudFunctionsV2StateMessage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateMessages') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclass
class FunctionInput:
    r"""FunctionInput
    Describes a Cloud Function that contains user computation executed in response to an event. It encapsulates function and trigger configurations.
    """
    
    build_config: Optional[BuildConfigInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildConfig') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    environment: Optional[FunctionEnvironmentEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    event_trigger: Optional[EventTriggerInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTrigger') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    service_config: Optional[ServiceConfigInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceConfig') }})
    
