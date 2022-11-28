from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAppsCardV1ButtonList:
    r"""GoogleAppsCardV1ButtonList
    A list of buttons layed out horizontally.
    """
    
    buttons: Optional[List[GoogleAppsCardV1Button]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buttons') }})
    
