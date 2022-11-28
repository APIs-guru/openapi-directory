from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IamPolicySearchResult:
    r"""IamPolicySearchResult
    A result of IAM Policy search, containing information of an IAM policy.
    """
    
    asset_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetType') }})
    explanation: Optional[Explanation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explanation') }})
    folders: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('folders') }})
    organization: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization') }})
    policy: Optional[Policy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    
