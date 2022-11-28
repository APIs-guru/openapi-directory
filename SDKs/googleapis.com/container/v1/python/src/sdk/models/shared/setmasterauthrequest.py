from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SetMasterAuthRequestActionEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    SET_PASSWORD = "SET_PASSWORD"
    GENERATE_PASSWORD = "GENERATE_PASSWORD"
    SET_USERNAME = "SET_USERNAME"


@dataclass_json
@dataclass
class SetMasterAuthRequest:
    r"""SetMasterAuthRequest
    SetMasterAuthRequest updates the admin password of a cluster.
    """
    
    action: Optional[SetMasterAuthRequestActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    cluster_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    update: Optional[MasterAuth] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('update') }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zone') }})
    
