from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1IntentCoverage:
    r"""GoogleCloudDialogflowCxV3beta1IntentCoverage
    Intent coverage represents the percentage of all possible intents in the agent that are triggered in any of a parent's test cases.
    """
    
    coverage_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coverageScore') }})
    intents: Optional[List[GoogleCloudDialogflowCxV3beta1IntentCoverageIntent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intents') }})
    
