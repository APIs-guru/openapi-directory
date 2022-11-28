from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleAppsCardV1OpenLinkOnCloseEnum(str, Enum):
    NOTHING = "NOTHING"
    RELOAD = "RELOAD"

class GoogleAppsCardV1OpenLinkOpenAsEnum(str, Enum):
    FULL_SIZE = "FULL_SIZE"
    OVERLAY = "OVERLAY"


@dataclass_json
@dataclass
class GoogleAppsCardV1OpenLink:
    r"""GoogleAppsCardV1OpenLink
    Represents an `onClick` event that opens a hyperlink.
    """
    
    on_close: Optional[GoogleAppsCardV1OpenLinkOnCloseEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onClose') }})
    open_as: Optional[GoogleAppsCardV1OpenLinkOpenAsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openAs') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
