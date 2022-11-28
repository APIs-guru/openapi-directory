from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConfigManagementSyncError:
    r"""ConfigManagementSyncError
    An ACM created error representing a problem syncing configurations
    """
    
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    error_resources: Optional[List[ConfigManagementErrorResource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorResources') }})
    
