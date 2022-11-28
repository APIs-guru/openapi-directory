from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDataplexV1EnvironmentStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    CREATING = "CREATING"
    DELETING = "DELETING"
    ACTION_REQUIRED = "ACTION_REQUIRED"


@dataclass_json
@dataclass
class GoogleCloudDataplexV1EnvironmentInput:
    r"""GoogleCloudDataplexV1EnvironmentInput
    Environment represents a user-visible compute infrastructure for analytics within a lake.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    infrastructure_spec: Optional[GoogleCloudDataplexV1EnvironmentInfrastructureSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infrastructureSpec') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    session_spec: Optional[GoogleCloudDataplexV1EnvironmentSessionSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionSpec') }})
    

@dataclass_json
@dataclass
class GoogleCloudDataplexV1Environment:
    r"""GoogleCloudDataplexV1Environment
    Environment represents a user-visible compute infrastructure for analytics within a lake.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    endpoints: Optional[GoogleCloudDataplexV1EnvironmentEndpoints] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoints') }})
    infrastructure_spec: Optional[GoogleCloudDataplexV1EnvironmentInfrastructureSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infrastructureSpec') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    session_spec: Optional[GoogleCloudDataplexV1EnvironmentSessionSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionSpec') }})
    session_status: Optional[GoogleCloudDataplexV1EnvironmentSessionStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionStatus') }})
    state: Optional[GoogleCloudDataplexV1EnvironmentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
