from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Replication:
    r"""Replication
    A policy that defines the replication configuration of data.
    """
    
    automatic: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('automatic') }})
    user_managed: Optional[UserManaged] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userManaged') }})
    
