from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SettingsChange:
    r"""SettingsChange
    Information about settings changes.
    """
    
    restriction_changes: Optional[List[RestrictionChange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictionChanges') }})
    
