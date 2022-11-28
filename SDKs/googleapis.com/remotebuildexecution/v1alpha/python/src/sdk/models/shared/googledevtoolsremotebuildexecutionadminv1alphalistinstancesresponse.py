from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesResponse:
    instances: Optional[List[GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instances') }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
