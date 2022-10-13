from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import truncatelogcontext


@dataclass_json
@dataclass
class InstancesTruncateLogRequest:
    truncate_log_context: Optional[truncatelogcontext.TruncateLogContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'truncateLogContext' }})
    
