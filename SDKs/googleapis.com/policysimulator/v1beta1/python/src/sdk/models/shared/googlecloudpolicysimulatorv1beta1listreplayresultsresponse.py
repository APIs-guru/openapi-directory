from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudPolicysimulatorV1beta1ListReplayResultsResponse:
    r"""GoogleCloudPolicysimulatorV1beta1ListReplayResultsResponse
    Response message for Simulator.ListReplayResults.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    replay_results: Optional[List[GoogleCloudPolicysimulatorV1beta1ReplayResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replayResults') }})
    
