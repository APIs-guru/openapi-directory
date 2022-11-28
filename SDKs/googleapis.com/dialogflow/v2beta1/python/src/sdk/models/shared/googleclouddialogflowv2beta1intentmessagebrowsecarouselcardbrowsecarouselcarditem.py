from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem:
    r"""GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem
    Browsing carousel tile
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    footer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('footer') }})
    image: Optional[GoogleCloudDialogflowV2beta1IntentMessageImage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    open_uri_action: Optional[GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openUriAction') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
