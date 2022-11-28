from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NfsMount:
    r"""NfsMount
    Configuration for an `NFSMount` to be attached to the VM.
    """
    
    target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    
