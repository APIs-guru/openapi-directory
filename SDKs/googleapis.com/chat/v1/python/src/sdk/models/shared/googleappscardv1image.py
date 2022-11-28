from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAppsCardV1Image:
    r"""GoogleAppsCardV1Image
    An image that is specified by a URL and can have an `onClick` action.
    """
    
    alt_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('altText') }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageUrl') }})
    on_click: Optional[GoogleAppsCardV1OnClick] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onClick') }})
    
