from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AnalyzerOrgPolicy:
    r"""AnalyzerOrgPolicy
    This organization policy message is a modified version of the one defined in the OrgPolicy system. This message contains several fields defined in the original organization policy with some new fields for analysis purpose.
    """
    
    applied_resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedResource') }})
    attached_resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachedResource') }})
    inherit_from_parent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inheritFromParent') }})
    reset: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reset') }})
    rules: Optional[List[GoogleCloudAssetV1Rule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
