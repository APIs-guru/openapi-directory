from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudMlV1ListOptimalTrialsResponse:
    r"""GoogleCloudMlV1ListOptimalTrialsResponse
    The response message for the ListOptimalTrials method.
    """
    
    trials: Optional[List[GoogleCloudMlV1Trial]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trials') }})
    
