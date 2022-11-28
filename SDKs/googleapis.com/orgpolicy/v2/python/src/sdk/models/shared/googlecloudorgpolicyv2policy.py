from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudOrgpolicyV2Policy:
    r"""GoogleCloudOrgpolicyV2Policy
    Defines a Cloud Organization `Policy` which is used to specify `Constraints` for configurations of Cloud Platform resources.
    """
    
    alternate: Optional[GoogleCloudOrgpolicyV2AlternatePolicySpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternate') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    spec: Optional[GoogleCloudOrgpolicyV2PolicySpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    

@dataclass_json
@dataclass
class GoogleCloudOrgpolicyV2PolicyInput:
    r"""GoogleCloudOrgpolicyV2PolicyInput
    Defines a Cloud Organization `Policy` which is used to specify `Constraints` for configurations of Cloud Platform resources.
    """
    
    alternate: Optional[GoogleCloudOrgpolicyV2AlternatePolicySpecInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternate') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    spec: Optional[GoogleCloudOrgpolicyV2PolicySpecInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    
