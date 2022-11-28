from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2IntentMessageListSelectItem:
    r"""GoogleCloudDialogflowV2IntentMessageListSelectItem
    An item in the list.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    image: Optional[GoogleCloudDialogflowV2IntentMessageImage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    info: Optional[GoogleCloudDialogflowV2IntentMessageSelectItemInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('info') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
