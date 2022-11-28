from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LocalObjectReference:
    r"""LocalObjectReference
    Not supported by Cloud Run LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
