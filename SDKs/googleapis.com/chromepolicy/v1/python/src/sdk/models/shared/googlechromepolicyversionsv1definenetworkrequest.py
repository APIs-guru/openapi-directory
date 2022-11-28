from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleChromePolicyVersionsV1DefineNetworkRequest:
    r"""GoogleChromePolicyVersionsV1DefineNetworkRequest
    Request object for creating a new network.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    settings: Optional[List[GoogleChromePolicyVersionsV1NetworkSetting]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    target_resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetResource') }})
    
