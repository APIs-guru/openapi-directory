from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IamPolicyAnalysisQuery:
    r"""IamPolicyAnalysisQuery
    IAM policy analysis query message.
    """
    
    access_selector: Optional[AccessSelector] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessSelector') }})
    condition_context: Optional[ConditionContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditionContext') }})
    identity_selector: Optional[IdentitySelector] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identitySelector') }})
    options: Optional[Options] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    resource_selector: Optional[ResourceSelector] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceSelector') }})
    scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    
