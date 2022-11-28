from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2IntentMessageBasicCard:
    r"""GoogleCloudDialogflowV2IntentMessageBasicCard
    The basic card message. Useful for displaying information.
    """
    
    buttons: Optional[List[GoogleCloudDialogflowV2IntentMessageBasicCardButton]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buttons') }})
    formatted_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formattedText') }})
    image: Optional[GoogleCloudDialogflowV2IntentMessageImage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    subtitle: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtitle') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
