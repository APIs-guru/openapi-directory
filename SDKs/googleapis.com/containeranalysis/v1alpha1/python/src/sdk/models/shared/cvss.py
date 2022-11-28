from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""Cvss
    Common Vulnerability Scoring System. This message is compatible with CVSS v2 and v3. For CVSS v2 details, see https://www.first.org/cvss/v2/guide CVSS v2 calculator: https://nvd.nist.gov/vuln-metrics/cvss/v2-calculator For CVSS v3 details, see https://www.first.org/cvss/specification-document CVSS v3 calculator: https://nvd.nist.gov/vuln-metrics/cvss/v3-calculator
    """
    
    attack_complexity: Optional[CvssAttackComplexityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attackComplexity') }})
    attack_vector: Optional[CvssAttackVectorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attackVector') }})
    authentication: Optional[CvssAuthenticationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication') }})
    availability_impact: Optional[CvssAvailabilityImpactEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availabilityImpact') }})
    base_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseScore') }})
    confidentiality_impact: Optional[CvssConfidentialityImpactEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidentialityImpact') }})
    exploitability_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exploitabilityScore') }})
    impact_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('impactScore') }})
    integrity_impact: Optional[CvssIntegrityImpactEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrityImpact') }})
    privileges_required: Optional[CvssPrivilegesRequiredEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privilegesRequired') }})
    scope: Optional[CvssScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    user_interaction: Optional[CvssUserInteractionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userInteraction') }})
    
