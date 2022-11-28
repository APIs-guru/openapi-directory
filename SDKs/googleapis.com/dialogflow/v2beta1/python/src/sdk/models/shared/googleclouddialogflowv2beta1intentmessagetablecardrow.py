from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessageTableCardRow:
    r"""GoogleCloudDialogflowV2beta1IntentMessageTableCardRow
    Row of TableCard.
    """
    
    cells: Optional[List[GoogleCloudDialogflowV2beta1IntentMessageTableCardCell]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cells') }})
    divider_after: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dividerAfter') }})
    
