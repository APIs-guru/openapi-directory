from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NodeConfigDefaults:
    r"""NodeConfigDefaults
    Subset of NodeConfig message that has defaults.
    """
    
    gcfs_config: Optional[GcfsConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcfsConfig') }})
    logging_config: Optional[NodePoolLoggingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loggingConfig') }})
    
