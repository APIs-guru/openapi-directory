from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Parameter:
    r"""Parameter
    Structured data associated with this message.
    """
    
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
