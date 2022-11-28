from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessageListSelect:
    r"""GoogleCloudDialogflowV2beta1IntentMessageListSelect
    The card for presenting a list of options to select from.
    """
    
    items: Optional[List[GoogleCloudDialogflowV2beta1IntentMessageListSelectItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    subtitle: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtitle') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
