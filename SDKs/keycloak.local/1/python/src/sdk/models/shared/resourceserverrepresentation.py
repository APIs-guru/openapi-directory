from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ResourceServerRepresentationDecisionStrategyEnum(str, Enum):
    AFFIRMATIVE = "AFFIRMATIVE"
    UNANIMOUS = "UNANIMOUS"
    CONSENSUS = "CONSENSUS"

class ResourceServerRepresentationPolicyEnforcementModeEnum(str, Enum):
    ENFORCING = "ENFORCING"
    PERMISSIVE = "PERMISSIVE"
    DISABLED = "DISABLED"


@dataclass_json
@dataclass
class ResourceServerRepresentation:
    allow_remote_resource_management: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowRemoteResourceManagement') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    decision_strategy: Optional[ResourceServerRepresentationDecisionStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('decisionStrategy') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    policies: Optional[List[PolicyRepresentation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policies') }})
    policy_enforcement_mode: Optional[ResourceServerRepresentationPolicyEnforcementModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyEnforcementMode') }})
    resources: Optional[List[ResourceRepresentation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    scopes: Optional[List[ScopeRepresentation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopes') }})
    
