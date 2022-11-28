from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SiteSkippableSetting:
    r"""SiteSkippableSetting
    Skippable Settings
    """
    
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    progress_offset: Optional[VideoOffset] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('progressOffset') }})
    skip_offset: Optional[VideoOffset] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipOffset') }})
    skippable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skippable') }})
    
