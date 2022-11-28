from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2HumanAgentHandoffConfigLivePersonConfig:
    r"""GoogleCloudDialogflowV2HumanAgentHandoffConfigLivePersonConfig
    Configuration specific to LivePerson (https://www.liveperson.com).
    """
    
    account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountNumber') }})
    
