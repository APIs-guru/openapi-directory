from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConnectAgentResource:
    r"""ConnectAgentResource
    ConnectAgentResource represents a Kubernetes resource manifest for Connect Agent deployment.
    """
    
    manifest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manifest') }})
    type: Optional[TypeMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
