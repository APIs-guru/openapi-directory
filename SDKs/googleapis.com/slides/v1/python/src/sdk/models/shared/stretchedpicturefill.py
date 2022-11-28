from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StretchedPictureFill:
    r"""StretchedPictureFill
    The stretched picture fill. The page or page element is filled entirely with the specified picture. The picture is stretched to fit its container.
    """
    
    content_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentUrl') }})
    size: Optional[Size] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    
