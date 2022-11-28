from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class QueryResponsePayload:
    r"""QueryResponsePayload
    Payload containing device states information.
    """
    
    devices: Optional[dict[str, dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devices') }})
    
