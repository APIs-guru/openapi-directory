from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LookupEffectiveGuestPolicyRequest:
    r"""LookupEffectiveGuestPolicyRequest
    A request message for getting the effective guest policy assigned to the instance.
    """
    
    os_architecture: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osArchitecture') }})
    os_short_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osShortName') }})
    os_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osVersion') }})
    
