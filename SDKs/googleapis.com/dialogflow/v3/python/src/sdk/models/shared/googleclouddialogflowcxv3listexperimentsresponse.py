from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ListExperimentsResponse:
    r"""GoogleCloudDialogflowCxV3ListExperimentsResponse
    The response message for Experiments.ListExperiments.
    """
    
    experiments: Optional[List[GoogleCloudDialogflowCxV3Experiment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('experiments') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
