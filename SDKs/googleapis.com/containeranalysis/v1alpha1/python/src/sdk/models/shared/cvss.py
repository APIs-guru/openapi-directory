from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class CvssAttackComplexityEnum(str, Enum):
    ATTACK_COMPLEXITY_UNSPECIFIED = "ATTACK_COMPLEXITY_UNSPECIFIED"
    ATTACK_COMPLEXITY_LOW = "ATTACK_COMPLEXITY_LOW"
    ATTACK_COMPLEXITY_HIGH = "ATTACK_COMPLEXITY_HIGH"
    ATTACK_COMPLEXITY_MEDIUM = "ATTACK_COMPLEXITY_MEDIUM"

class CvssAttackVectorEnum(str, Enum):
    ATTACK_VECTOR_UNSPECIFIED = "ATTACK_VECTOR_UNSPECIFIED"
    ATTACK_VECTOR_NETWORK = "ATTACK_VECTOR_NETWORK"
    ATTACK_VECTOR_ADJACENT = "ATTACK_VECTOR_ADJACENT"
    ATTACK_VECTOR_LOCAL = "ATTACK_VECTOR_LOCAL"
    ATTACK_VECTOR_PHYSICAL = "ATTACK_VECTOR_PHYSICAL"

class CvssAuthenticationEnum(str, Enum):
    AUTHENTICATION_UNSPECIFIED = "AUTHENTICATION_UNSPECIFIED"
    AUTHENTICATION_MULTIPLE = "AUTHENTICATION_MULTIPLE"
    AUTHENTICATION_SINGLE = "AUTHENTICATION_SINGLE"
    AUTHENTICATION_NONE = "AUTHENTICATION_NONE"

class CvssAvailabilityImpactEnum(str, Enum):
    IMPACT_UNSPECIFIED = "IMPACT_UNSPECIFIED"
    IMPACT_HIGH = "IMPACT_HIGH"
    IMPACT_LOW = "IMPACT_LOW"
    IMPACT_NONE = "IMPACT_NONE"
    IMPACT_PARTIAL = "IMPACT_PARTIAL"
    IMPACT_COMPLETE = "IMPACT_COMPLETE"

class CvssConfidentialityImpactEnum(str, Enum):
    IMPACT_UNSPECIFIED = "IMPACT_UNSPECIFIED"
    IMPACT_HIGH = "IMPACT_HIGH"
    IMPACT_LOW = "IMPACT_LOW"
    IMPACT_NONE = "IMPACT_NONE"
    IMPACT_PARTIAL = "IMPACT_PARTIAL"
    IMPACT_COMPLETE = "IMPACT_COMPLETE"

class CvssIntegrityImpactEnum(str, Enum):
    IMPACT_UNSPECIFIED = "IMPACT_UNSPECIFIED"
    IMPACT_HIGH = "IMPACT_HIGH"
    IMPACT_LOW = "IMPACT_LOW"
    IMPACT_NONE = "IMPACT_NONE"
    IMPACT_PARTIAL = "IMPACT_PARTIAL"
    IMPACT_COMPLETE = "IMPACT_COMPLETE"

class CvssPrivilegesRequiredEnum(str, Enum):
    PRIVILEGES_REQUIRED_UNSPECIFIED = "PRIVILEGES_REQUIRED_UNSPECIFIED"
    PRIVILEGES_REQUIRED_NONE = "PRIVILEGES_REQUIRED_NONE"
    PRIVILEGES_REQUIRED_LOW = "PRIVILEGES_REQUIRED_LOW"
    PRIVILEGES_REQUIRED_HIGH = "PRIVILEGES_REQUIRED_HIGH"

class CvssScopeEnum(str, Enum):
    SCOPE_UNSPECIFIED = "SCOPE_UNSPECIFIED"
    SCOPE_UNCHANGED = "SCOPE_UNCHANGED"
    SCOPE_CHANGED = "SCOPE_CHANGED"

class CvssUserInteractionEnum(str, Enum):
    USER_INTERACTION_UNSPECIFIED = "USER_INTERACTION_UNSPECIFIED"
    USER_INTERACTION_NONE = "USER_INTERACTION_NONE"
    USER_INTERACTION_REQUIRED = "USER_INTERACTION_REQUIRED"


@dataclass_json
@dataclass
class Cvss:
    attack_complexity: Optional[CvssAttackComplexityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attackComplexity' }})
    attack_vector: Optional[CvssAttackVectorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attackVector' }})
    authentication: Optional[CvssAuthenticationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authentication' }})
    availability_impact: Optional[CvssAvailabilityImpactEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availabilityImpact' }})
    base_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseScore' }})
    confidentiality_impact: Optional[CvssConfidentialityImpactEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidentialityImpact' }})
    exploitability_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exploitabilityScore' }})
    impact_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'impactScore' }})
    integrity_impact: Optional[CvssIntegrityImpactEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integrityImpact' }})
    privileges_required: Optional[CvssPrivilegesRequiredEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privilegesRequired' }})
    scope: Optional[CvssScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    user_interaction: Optional[CvssUserInteractionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userInteraction' }})
    
