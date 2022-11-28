from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BadResponse:
    r"""BadResponse
    An HTTP response that is not supposed to be returned by a service
    """
    
    body: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    headers: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    status: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
