from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleHomeEnterpriseSdmV1Room:
    r"""GoogleHomeEnterpriseSdmV1Room
    Room resource represents an instance of sub-space within a structure such as rooms in a hotel suite or rental apartment.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    traits: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('traits') }})
    
