from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3MatchIntentResponse:
    r"""GoogleCloudDialogflowCxV3MatchIntentResponse
    Response of MatchIntent.
    """
    
    current_page: Optional[GoogleCloudDialogflowCxV3Page] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentPage') }})
    matches: Optional[List[GoogleCloudDialogflowCxV3Match]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matches') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    transcript: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transcript') }})
    trigger_event: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerEvent') }})
    trigger_intent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerIntent') }})
    
