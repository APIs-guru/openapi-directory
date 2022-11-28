from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ResultDebugInfo:
    r"""ResultDebugInfo
    Debugging information about the result.
    """
    
    formatted_debug_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formattedDebugInfo') }})
    
