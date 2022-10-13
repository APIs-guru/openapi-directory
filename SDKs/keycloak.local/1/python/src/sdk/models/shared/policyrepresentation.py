from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import resourcerepresentation
from . import scoperepresentation

class PolicyRepresentationDecisionStrategyEnum(str, Enum):
    AFFIRMATIVE = "AFFIRMATIVE"
    UNANIMOUS = "UNANIMOUS"
    CONSENSUS = "CONSENSUS"

class PolicyRepresentationLogicEnum(str, Enum):
    POSITIVE = "POSITIVE"
    NEGATIVE = "NEGATIVE"


@dataclass_json
@dataclass
class PolicyRepresentation:
    config: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    decision_strategy: Optional[PolicyRepresentationDecisionStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'decisionStrategy' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    logic: Optional[PolicyRepresentationLogicEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logic' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    policies: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policies' }})
    resources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    resources_data: Optional[List[resourcerepresentation.ResourceRepresentation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourcesData' }})
    scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scopes' }})
    scopes_data: Optional[List[scoperepresentation.ScopeRepresentation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scopesData' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
