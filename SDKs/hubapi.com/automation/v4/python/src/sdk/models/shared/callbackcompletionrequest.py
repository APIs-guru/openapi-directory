from dataclasses import dataclass, field
from typing import Any
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CallbackCompletionRequest:
    r"""CallbackCompletionRequest
    Any information to send back to Workflows when completing an action callback.
    """
    
    output_fields: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputFields') }})
    
