from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Dialog:
    r"""Dialog
    Wrapper around the card body of the dialog.
    """
    
    body: Optional[GoogleAppsCardV1Card] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    
