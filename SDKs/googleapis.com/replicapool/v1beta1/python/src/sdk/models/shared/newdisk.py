from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NewDisk:
    r"""NewDisk
    A Persistent Disk resource that will be created and attached to each Replica in the Pool. Each Replica will have a unique persistent disk that is created and attached to that Replica in READ_WRITE mode.
    """
    
    attachment: Optional[DiskAttachment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachment') }})
    auto_delete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoDelete') }})
    boot: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boot') }})
    initialize_params: Optional[NewDiskInitializeParams] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initializeParams') }})
    
