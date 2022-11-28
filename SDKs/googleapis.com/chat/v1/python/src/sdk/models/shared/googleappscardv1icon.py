from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleAppsCardV1IconImageTypeEnum(str, Enum):
    SQUARE = "SQUARE"
    CIRCLE = "CIRCLE"


@dataclass_json
@dataclass
class GoogleAppsCardV1Icon:
    r"""GoogleAppsCardV1Icon
    An icon displayed in a widget on a card. Supports [standard](https://developers.google.com/chat/api/guides/message-formats/cards) and [custom](https://developers.google.com/chat/api/guides/message-formats/cards#customicons) icons.
    """
    
    alt_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('altText') }})
    icon_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iconUrl') }})
    image_type: Optional[GoogleAppsCardV1IconImageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageType') }})
    known_icon: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('knownIcon') }})
    
