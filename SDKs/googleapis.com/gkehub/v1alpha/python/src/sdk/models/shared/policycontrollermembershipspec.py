from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PolicyControllerMembershipSpec:
    r"""PolicyControllerMembershipSpec
    **Policy Controller**: Configuration for a single cluster. Intended to parallel the PolicyController CR.
    """
    
    policy_controller_hub_config: Optional[PolicyControllerHubConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyControllerHubConfig') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
