from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PermissionID:
    r"""PermissionID
    An ID for a user or group as seen in Permission items.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
