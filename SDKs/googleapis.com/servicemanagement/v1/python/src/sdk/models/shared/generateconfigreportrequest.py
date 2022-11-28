from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GenerateConfigReportRequest:
    r"""GenerateConfigReportRequest
    Request message for GenerateConfigReport method.
    """
    
    new_config: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newConfig') }})
    old_config: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oldConfig') }})
    
