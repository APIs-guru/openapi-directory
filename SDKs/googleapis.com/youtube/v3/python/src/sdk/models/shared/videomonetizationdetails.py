from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VideoMonetizationDetails:
    r"""VideoMonetizationDetails
    Details about monetization of a YouTube Video.
    """
    
    access: Optional[AccessPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    
