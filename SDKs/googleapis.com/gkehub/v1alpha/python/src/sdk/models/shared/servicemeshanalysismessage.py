from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ServiceMeshAnalysisMessage:
    r"""ServiceMeshAnalysisMessage
    AnalysisMessage is a single message produced by an analyzer, and it used to communicate to the end user about the state of their Service Mesh configuration.
    """
    
    args: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('args') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    message_base: Optional[ServiceMeshAnalysisMessageBase] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageBase') }})
    resource_paths: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourcePaths') }})
    
