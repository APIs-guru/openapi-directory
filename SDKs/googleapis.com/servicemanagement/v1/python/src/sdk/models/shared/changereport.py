from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ChangeReport:
    r"""ChangeReport
    Change report associated with a particular service configuration. It contains a list of ConfigChanges based on the comparison between two service configurations.
    """
    
    config_changes: Optional[List[ConfigChange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configChanges') }})
    
