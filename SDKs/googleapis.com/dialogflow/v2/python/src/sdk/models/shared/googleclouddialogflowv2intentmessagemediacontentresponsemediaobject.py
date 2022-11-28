from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject:
    r"""GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject
    Response media object for media content card.
    """
    
    content_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentUrl') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    icon: Optional[GoogleCloudDialogflowV2IntentMessageImage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('icon') }})
    large_image: Optional[GoogleCloudDialogflowV2IntentMessageImage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('largeImage') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
