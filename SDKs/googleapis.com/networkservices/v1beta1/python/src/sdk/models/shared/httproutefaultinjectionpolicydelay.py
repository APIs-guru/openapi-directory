from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HTTPRouteFaultInjectionPolicyDelay:
    r"""HTTPRouteFaultInjectionPolicyDelay
    Specification of how client requests are delayed as part of fault injection before being sent to a destination.
    """
    
    fixed_delay: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedDelay') }})
    percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentage') }})
    
