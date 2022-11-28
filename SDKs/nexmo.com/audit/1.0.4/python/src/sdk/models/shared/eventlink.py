from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EventLink:
    r"""EventLink
    A link to this audit event object if you were to retrieve it individually.
    """
    
    self: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
