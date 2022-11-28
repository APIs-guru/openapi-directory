from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TruncateLogContext:
    r"""TruncateLogContext
    Database Instance truncate log context.
    """
    
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    log_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logType') }})
    
