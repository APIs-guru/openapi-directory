from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentBatchInput:
    r"""GoogleCloudDialogflowV2beta1IntentBatchInput
    This message is a wrapper around a collection of intents.
    """
    
    intents: Optional[List[GoogleCloudDialogflowV2beta1IntentInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intents') }})
    
