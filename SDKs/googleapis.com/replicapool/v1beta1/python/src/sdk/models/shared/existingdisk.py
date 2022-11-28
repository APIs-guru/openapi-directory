from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExistingDisk:
    r"""ExistingDisk
    A pre-existing persistent disk that will be attached to every Replica in the Pool in READ_ONLY mode.
    """
    
    attachment: Optional[DiskAttachment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachment') }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
