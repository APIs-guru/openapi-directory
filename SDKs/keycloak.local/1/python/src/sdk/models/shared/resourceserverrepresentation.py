from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import policyrepresentation
from . import resourcerepresentation
from . import scoperepresentation

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
    allow_remote_resource_management: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowRemoteResourceManagement' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientId' }})
    decision_strategy: Optional[ResourceServerRepresentationDecisionStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'decisionStrategy' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    policies: Optional[List[policyrepresentation.PolicyRepresentation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policies' }})
    policy_enforcement_mode: Optional[ResourceServerRepresentationPolicyEnforcementModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyEnforcementMode' }})
    resources: Optional[List[resourcerepresentation.ResourceRepresentation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    scopes: Optional[List[scoperepresentation.ScopeRepresentation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scopes' }})
    
