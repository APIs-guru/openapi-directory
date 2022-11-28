from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstancesTruncateLogRequest:
    r"""InstancesTruncateLogRequest
    Instance truncate log request.
    """
    
    truncate_log_context: Optional[TruncateLogContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('truncateLogContext') }})
    
