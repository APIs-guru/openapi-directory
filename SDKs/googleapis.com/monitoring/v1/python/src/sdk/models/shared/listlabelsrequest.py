from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ListLabelsRequest:
    r"""ListLabelsRequest
    ListLabelsRequest holds all parameters of the Prometheus upstream API for returning a list of label names.
    """
    
    end: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    match: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('match') }})
    start: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    
