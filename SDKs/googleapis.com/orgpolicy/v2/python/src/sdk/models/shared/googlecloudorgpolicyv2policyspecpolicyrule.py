from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudOrgpolicyV2PolicySpecPolicyRule:
    r"""GoogleCloudOrgpolicyV2PolicySpecPolicyRule
    A rule used to express this policy.
    """
    
    allow_all: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowAll') }})
    condition: Optional[GoogleTypeExpr] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    deny_all: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('denyAll') }})
    enforce: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforce') }})
    values: Optional[GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
