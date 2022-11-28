from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudMlV1SuggestTrialsRequest:
    r"""GoogleCloudMlV1SuggestTrialsRequest
    The request message for the SuggestTrial service method.
    """
    
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    suggestion_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestionCount') }})
    
