from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnum(str, Enum):
    URL_TYPE_HINT_UNSPECIFIED = "URL_TYPE_HINT_UNSPECIFIED"
    AMP_ACTION = "AMP_ACTION"
    AMP_CONTENT = "AMP_CONTENT"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction:
    r"""GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction
    Actions on Google action to open a given url.
    """
    
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    url_type_hint: Optional[GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlTypeHint') }})
    
