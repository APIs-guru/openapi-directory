from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudpolicysimulatorv1beta1replayresult


@dataclass_json
@dataclass
class GoogleCloudPolicysimulatorV1beta1ListReplayResultsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    replay_results: Optional[List[googlecloudpolicysimulatorv1beta1replayresult.GoogleCloudPolicysimulatorV1beta1ReplayResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replayResults' }})
    
