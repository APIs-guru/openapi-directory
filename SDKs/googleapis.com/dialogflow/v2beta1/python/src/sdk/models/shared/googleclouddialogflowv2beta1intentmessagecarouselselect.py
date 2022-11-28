from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect:
    r"""GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect
    The card for presenting a carousel of options to select from.
    """
    
    items: Optional[List[GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    
