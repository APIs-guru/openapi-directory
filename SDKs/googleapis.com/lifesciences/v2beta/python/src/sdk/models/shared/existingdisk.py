from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ExistingDisk:
    r"""ExistingDisk
    Configuration for an existing disk to be attached to the VM.
    """
    
    disk: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disk') }})
    
