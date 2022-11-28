from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudMlV1ListTrialsResponse:
    r"""GoogleCloudMlV1ListTrialsResponse
    The response message for the ListTrials method.
    """
    
    trials: Optional[List[GoogleCloudMlV1Trial]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trials') }})
    
