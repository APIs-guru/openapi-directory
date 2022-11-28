from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAppsScriptTypeWebAppEntryPoint:
    r"""GoogleAppsScriptTypeWebAppEntryPoint
    A web application entry point.
    """
    
    entry_point_config: Optional[GoogleAppsScriptTypeWebAppConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entryPointConfig') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
