from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RichMediaExitOverride:
    r"""RichMediaExitOverride
    Rich Media Exit Override.
    """
    
    click_through_url: Optional[ClickThroughURL] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickThroughUrl') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    exit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exitId') }})
    
