from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    RUNNING = "RUNNING"
    INACTIVE = "INACTIVE"


@dataclass_json
@dataclass
class GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance:
    r"""GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance
    Instance conceptually encapsulates all Remote Build Execution resources for remote builds. An instance consists of storage and compute resources (for example, `ContentAddressableStorage`, `ActionCache`, `WorkerPools`) used for running remote builds. All Remote Build Execution API calls are scoped to an instance.
    """
    
    feature_policy: Optional[GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('featurePolicy') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    logging_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loggingEnabled') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
