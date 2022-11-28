from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WorkerShutdownNotice:
    r"""WorkerShutdownNotice
    Shutdown notification from workers. This is to be sent by the shutdown script of the worker VM so that the backend knows that the VM is being shut down.
    """
    
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    
