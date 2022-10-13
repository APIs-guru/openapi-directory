from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import policycontrollerhubconfig


@dataclass_json
@dataclass
class PolicyControllerMembershipSpec:
    policy_controller_hub_config: Optional[policycontrollerhubconfig.PolicyControllerHubConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyControllerHubConfig' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
