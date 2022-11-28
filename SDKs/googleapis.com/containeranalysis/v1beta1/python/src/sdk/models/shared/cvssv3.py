from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CvsSv3AttackComplexityEnum(str, Enum):
    ATTACK_COMPLEXITY_UNSPECIFIED = "ATTACK_COMPLEXITY_UNSPECIFIED"
    ATTACK_COMPLEXITY_LOW = "ATTACK_COMPLEXITY_LOW"
    ATTACK_COMPLEXITY_HIGH = "ATTACK_COMPLEXITY_HIGH"

class CvsSv3AttackVectorEnum(str, Enum):
    ATTACK_VECTOR_UNSPECIFIED = "ATTACK_VECTOR_UNSPECIFIED"
    ATTACK_VECTOR_NETWORK = "ATTACK_VECTOR_NETWORK"
    ATTACK_VECTOR_ADJACENT = "ATTACK_VECTOR_ADJACENT"
    ATTACK_VECTOR_LOCAL = "ATTACK_VECTOR_LOCAL"
    ATTACK_VECTOR_PHYSICAL = "ATTACK_VECTOR_PHYSICAL"

class CvsSv3AvailabilityImpactEnum(str, Enum):
    IMPACT_UNSPECIFIED = "IMPACT_UNSPECIFIED"
    IMPACT_HIGH = "IMPACT_HIGH"
    IMPACT_LOW = "IMPACT_LOW"
    IMPACT_NONE = "IMPACT_NONE"

class CvsSv3ConfidentialityImpactEnum(str, Enum):
    IMPACT_UNSPECIFIED = "IMPACT_UNSPECIFIED"
    IMPACT_HIGH = "IMPACT_HIGH"
    IMPACT_LOW = "IMPACT_LOW"
    IMPACT_NONE = "IMPACT_NONE"

class CvsSv3IntegrityImpactEnum(str, Enum):
    IMPACT_UNSPECIFIED = "IMPACT_UNSPECIFIED"
    IMPACT_HIGH = "IMPACT_HIGH"
    IMPACT_LOW = "IMPACT_LOW"
    IMPACT_NONE = "IMPACT_NONE"

class CvsSv3PrivilegesRequiredEnum(str, Enum):
    PRIVILEGES_REQUIRED_UNSPECIFIED = "PRIVILEGES_REQUIRED_UNSPECIFIED"
    PRIVILEGES_REQUIRED_NONE = "PRIVILEGES_REQUIRED_NONE"
    PRIVILEGES_REQUIRED_LOW = "PRIVILEGES_REQUIRED_LOW"
    PRIVILEGES_REQUIRED_HIGH = "PRIVILEGES_REQUIRED_HIGH"

class CvsSv3ScopeEnum(str, Enum):
    SCOPE_UNSPECIFIED = "SCOPE_UNSPECIFIED"
    SCOPE_UNCHANGED = "SCOPE_UNCHANGED"
    SCOPE_CHANGED = "SCOPE_CHANGED"

class CvsSv3UserInteractionEnum(str, Enum):
    USER_INTERACTION_UNSPECIFIED = "USER_INTERACTION_UNSPECIFIED"
    USER_INTERACTION_NONE = "USER_INTERACTION_NONE"
    USER_INTERACTION_REQUIRED = "USER_INTERACTION_REQUIRED"


@dataclass_json
@dataclass
class CvsSv3:
    r"""CvsSv3
    Deprecated. Common Vulnerability Scoring System version 3. For details, see https://www.first.org/cvss/specification-document
    """
    
    attack_complexity: Optional[CvsSv3AttackComplexityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attackComplexity') }})
    attack_vector: Optional[CvsSv3AttackVectorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attackVector') }})
    availability_impact: Optional[CvsSv3AvailabilityImpactEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availabilityImpact') }})
    base_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseScore') }})
    confidentiality_impact: Optional[CvsSv3ConfidentialityImpactEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidentialityImpact') }})
    exploitability_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exploitabilityScore') }})
    impact_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('impactScore') }})
    integrity_impact: Optional[CvsSv3IntegrityImpactEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrityImpact') }})
    privileges_required: Optional[CvsSv3PrivilegesRequiredEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privilegesRequired') }})
    scope: Optional[CvsSv3ScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    user_interaction: Optional[CvsSv3UserInteractionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userInteraction') }})
    
