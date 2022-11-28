from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetEffectiveOrgPolicyRequest:
    r"""GetEffectiveOrgPolicyRequest
    The request sent to the GetEffectiveOrgPolicy method.
    """
    
    constraint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('constraint') }})
    
