from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    config: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    decision_strategy: Optional[PolicyRepresentationDecisionStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('decisionStrategy') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    logic: Optional[PolicyRepresentationLogicEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logic') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    policies: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policies') }})
    resources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    resources_data: Optional[List[ResourceRepresentation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourcesData') }})
    scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopes') }})
    scopes_data: Optional[List[ScopeRepresentation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopesData') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
