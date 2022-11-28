from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleIamV2betaDenyRule:
    r"""GoogleIamV2betaDenyRule
    A deny rule in an IAM deny policy.
    """
    
    denial_condition: Optional[GoogleTypeExpr] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('denialCondition') }})
    denied_permissions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deniedPermissions') }})
    denied_principals: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deniedPrincipals') }})
    exception_permissions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exceptionPermissions') }})
    exception_principals: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exceptionPrincipals') }})
    
