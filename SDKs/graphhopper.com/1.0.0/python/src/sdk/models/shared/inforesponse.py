from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InfoResponse:
    r"""InfoResponse
    Information about the server and the geographical area that it covers.
    """
    
    bbox: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bbox') }})
    features: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('features') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
