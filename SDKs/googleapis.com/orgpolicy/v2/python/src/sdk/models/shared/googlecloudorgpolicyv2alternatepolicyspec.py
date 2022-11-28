from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudOrgpolicyV2AlternatePolicySpec:
    r"""GoogleCloudOrgpolicyV2AlternatePolicySpec
    Similar to PolicySpec but with an extra 'launch' field for launch reference. The PolicySpec here is specific for dry-run/darklaunch.
    """
    
    launch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launch') }})
    spec: Optional[GoogleCloudOrgpolicyV2PolicySpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    

@dataclass_json
@dataclass
class GoogleCloudOrgpolicyV2AlternatePolicySpecInput:
    r"""GoogleCloudOrgpolicyV2AlternatePolicySpecInput
    Similar to PolicySpec but with an extra 'launch' field for launch reference. The PolicySpec here is specific for dry-run/darklaunch.
    """
    
    launch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launch') }})
    spec: Optional[GoogleCloudOrgpolicyV2PolicySpecInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    
