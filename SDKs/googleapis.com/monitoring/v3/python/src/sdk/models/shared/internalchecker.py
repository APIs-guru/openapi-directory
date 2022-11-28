from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class InternalCheckerStateEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    CREATING = "CREATING"
    RUNNING = "RUNNING"


@dataclass_json
@dataclass
class InternalChecker:
    r"""InternalChecker
    An internal checker allows Uptime checks to run on private/internal GCP resources.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    gcp_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcpZone') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    peer_project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('peerProjectId') }})
    state: Optional[InternalCheckerStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
