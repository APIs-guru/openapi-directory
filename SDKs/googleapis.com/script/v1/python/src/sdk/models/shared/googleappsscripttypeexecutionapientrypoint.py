from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAppsScriptTypeExecutionAPIEntryPoint:
    r"""GoogleAppsScriptTypeExecutionAPIEntryPoint
    An API executable entry point.
    """
    
    entry_point_config: Optional[GoogleAppsScriptTypeExecutionAPIConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entryPointConfig') }})
    
