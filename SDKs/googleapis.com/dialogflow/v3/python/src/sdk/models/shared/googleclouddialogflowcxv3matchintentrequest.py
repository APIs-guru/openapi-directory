from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3MatchIntentRequest:
    r"""GoogleCloudDialogflowCxV3MatchIntentRequest
    Request of MatchIntent.
    """
    
    query_input: Optional[GoogleCloudDialogflowCxV3QueryInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryInput') }})
    query_params: Optional[GoogleCloudDialogflowCxV3QueryParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryParams') }})
    
