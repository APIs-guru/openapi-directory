from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ResponseDebugInfo:
    r"""ResponseDebugInfo
    Debugging information about the response.
    """
    
    formatted_debug_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formattedDebugInfo') }})
    
