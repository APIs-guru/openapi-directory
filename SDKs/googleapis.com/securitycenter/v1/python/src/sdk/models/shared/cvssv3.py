from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class Cvssv3AttackComplexityEnum(str, Enum):
    ATTACK_COMPLEXITY_UNSPECIFIED = "ATTACK_COMPLEXITY_UNSPECIFIED"
    ATTACK_COMPLEXITY_LOW = "ATTACK_COMPLEXITY_LOW"
    ATTACK_COMPLEXITY_HIGH = "ATTACK_COMPLEXITY_HIGH"

class Cvssv3AttackVectorEnum(str, Enum):
    ATTACK_VECTOR_UNSPECIFIED = "ATTACK_VECTOR_UNSPECIFIED"
    ATTACK_VECTOR_NETWORK = "ATTACK_VECTOR_NETWORK"
    ATTACK_VECTOR_ADJACENT = "ATTACK_VECTOR_ADJACENT"
    ATTACK_VECTOR_LOCAL = "ATTACK_VECTOR_LOCAL"
    ATTACK_VECTOR_PHYSICAL = "ATTACK_VECTOR_PHYSICAL"

class Cvssv3AvailabilityImpactEnum(str, Enum):
    IMPACT_UNSPECIFIED = "IMPACT_UNSPECIFIED"
    IMPACT_HIGH = "IMPACT_HIGH"
    IMPACT_LOW = "IMPACT_LOW"
    IMPACT_NONE = "IMPACT_NONE"

class Cvssv3ConfidentialityImpactEnum(str, Enum):
    IMPACT_UNSPECIFIED = "IMPACT_UNSPECIFIED"
    IMPACT_HIGH = "IMPACT_HIGH"
    IMPACT_LOW = "IMPACT_LOW"
    IMPACT_NONE = "IMPACT_NONE"

class Cvssv3IntegrityImpactEnum(str, Enum):
    IMPACT_UNSPECIFIED = "IMPACT_UNSPECIFIED"
    IMPACT_HIGH = "IMPACT_HIGH"
    IMPACT_LOW = "IMPACT_LOW"
    IMPACT_NONE = "IMPACT_NONE"

class Cvssv3PrivilegesRequiredEnum(str, Enum):
    PRIVILEGES_REQUIRED_UNSPECIFIED = "PRIVILEGES_REQUIRED_UNSPECIFIED"
    PRIVILEGES_REQUIRED_NONE = "PRIVILEGES_REQUIRED_NONE"
    PRIVILEGES_REQUIRED_LOW = "PRIVILEGES_REQUIRED_LOW"
    PRIVILEGES_REQUIRED_HIGH = "PRIVILEGES_REQUIRED_HIGH"

class Cvssv3ScopeEnum(str, Enum):
    SCOPE_UNSPECIFIED = "SCOPE_UNSPECIFIED"
    SCOPE_UNCHANGED = "SCOPE_UNCHANGED"
    SCOPE_CHANGED = "SCOPE_CHANGED"

class Cvssv3UserInteractionEnum(str, Enum):
    USER_INTERACTION_UNSPECIFIED = "USER_INTERACTION_UNSPECIFIED"
    USER_INTERACTION_NONE = "USER_INTERACTION_NONE"
    USER_INTERACTION_REQUIRED = "USER_INTERACTION_REQUIRED"


@dataclass_json
@dataclass
class Cvssv3:
    attack_complexity: Optional[Cvssv3AttackComplexityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attackComplexity' }})
    attack_vector: Optional[Cvssv3AttackVectorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attackVector' }})
    availability_impact: Optional[Cvssv3AvailabilityImpactEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availabilityImpact' }})
    base_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseScore' }})
    confidentiality_impact: Optional[Cvssv3ConfidentialityImpactEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidentialityImpact' }})
    integrity_impact: Optional[Cvssv3IntegrityImpactEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integrityImpact' }})
    privileges_required: Optional[Cvssv3PrivilegesRequiredEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privilegesRequired' }})
    scope: Optional[Cvssv3ScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    user_interaction: Optional[Cvssv3UserInteractionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userInteraction' }})
    
