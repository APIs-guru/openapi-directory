from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateShortDynamicLinkResponse:
    r"""CreateShortDynamicLinkResponse
    Response to create a short Dynamic Link.
    """
    
    preview_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previewLink') }})
    short_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shortLink') }})
    warning: Optional[List[DynamicLinkWarning]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warning') }})
    
