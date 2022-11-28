from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateManagedShortLinkResponse:
    r"""CreateManagedShortLinkResponse
    Response to create a short Dynamic Link.
    """
    
    managed_short_link: Optional[ManagedShortLink] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedShortLink') }})
    preview_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previewLink') }})
    warning: Optional[List[DynamicLinkWarning]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warning') }})
    
