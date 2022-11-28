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
    identity_selector: Optional[IdentitySelector] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identitySelector') }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    resource_selector: Optional[ResourceSelector] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceSelector') }})
    
