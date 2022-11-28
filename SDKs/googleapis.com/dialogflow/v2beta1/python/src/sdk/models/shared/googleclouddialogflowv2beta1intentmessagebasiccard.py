from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessageBasicCard:
    r"""GoogleCloudDialogflowV2beta1IntentMessageBasicCard
    The basic card message. Useful for displaying information.
    """
    
    buttons: Optional[List[GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buttons') }})
    formatted_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formattedText') }})
    image: Optional[GoogleCloudDialogflowV2beta1IntentMessageImage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    subtitle: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtitle') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
