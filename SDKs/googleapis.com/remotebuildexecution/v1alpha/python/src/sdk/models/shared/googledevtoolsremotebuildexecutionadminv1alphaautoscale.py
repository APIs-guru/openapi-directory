from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale:
    r"""GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale
    Autoscale defines the autoscaling policy of a worker pool.
    """
    
    max_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxSize') }})
    min_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minSize') }})
    
