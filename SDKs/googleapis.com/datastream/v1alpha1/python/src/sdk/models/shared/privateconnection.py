from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PrivateConnectionStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    CREATED = "CREATED"
    FAILED = "FAILED"
    DELETING = "DELETING"
    FAILED_TO_DELETE = "FAILED_TO_DELETE"


@dataclass_json
@dataclass
class PrivateConnection:
    r"""PrivateConnection
    The PrivateConnection resource is used to establish private connectivity between Datastream and a customer's network.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    error: Optional[Error] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[PrivateConnectionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    vpc_peering_config: Optional[VpcPeeringConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcPeeringConfig') }})
    

@dataclass_json
@dataclass
class PrivateConnectionInput:
    r"""PrivateConnectionInput
    The PrivateConnection resource is used to establish private connectivity between Datastream and a customer's network.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    error: Optional[Error] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    vpc_peering_config: Optional[VpcPeeringConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcPeeringConfig') }})
    
