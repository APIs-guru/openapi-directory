from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class EntryPointEntryPointTypeEnum(str, Enum):
    ENTRY_POINT_TYPE_UNSPECIFIED = "ENTRY_POINT_TYPE_UNSPECIFIED"
    WEB_APP = "WEB_APP"
    EXECUTION_API = "EXECUTION_API"
    ADD_ON = "ADD_ON"


@dataclass_json
@dataclass
class EntryPoint:
    r"""EntryPoint
    A configuration that defines how a deployment is accessed externally.
    """
    
    add_on: Optional[GoogleAppsScriptTypeAddOnEntryPoint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addOn') }})
    entry_point_type: Optional[EntryPointEntryPointTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entryPointType') }})
    execution_api: Optional[GoogleAppsScriptTypeExecutionAPIEntryPoint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionApi') }})
    web_app: Optional[GoogleAppsScriptTypeWebAppEntryPoint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webApp') }})
    
