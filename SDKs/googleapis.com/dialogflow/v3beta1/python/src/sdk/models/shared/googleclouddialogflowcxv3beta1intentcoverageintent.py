from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1IntentCoverageIntent:
    r"""GoogleCloudDialogflowCxV3beta1IntentCoverageIntent
    The agent's intent.
    """
    
    covered: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('covered') }})
    intent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intent') }})
    
