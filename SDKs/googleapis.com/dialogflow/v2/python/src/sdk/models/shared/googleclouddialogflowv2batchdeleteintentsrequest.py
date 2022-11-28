from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2BatchDeleteIntentsRequestInput:
    r"""GoogleCloudDialogflowV2BatchDeleteIntentsRequestInput
    The request message for Intents.BatchDeleteIntents.
    """
    
    intents: Optional[List[GoogleCloudDialogflowV2IntentInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intents') }})
    
