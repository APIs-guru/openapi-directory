from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SQLInstancesVerifyExternalSyncSettingsResponse:
    r"""SQLInstancesVerifyExternalSyncSettingsResponse
    Instance verify external sync settings response.
    """
    
    errors: Optional[List[SQLExternalSyncSettingError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    warnings: Optional[List[SQLExternalSyncSettingError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
