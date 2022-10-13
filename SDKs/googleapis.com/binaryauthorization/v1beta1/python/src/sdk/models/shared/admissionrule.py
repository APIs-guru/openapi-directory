from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class AdmissionRuleEnforcementModeEnum(str, Enum):
    ENFORCEMENT_MODE_UNSPECIFIED = "ENFORCEMENT_MODE_UNSPECIFIED"
    ENFORCED_BLOCK_AND_AUDIT_LOG = "ENFORCED_BLOCK_AND_AUDIT_LOG"
    DRYRUN_AUDIT_LOG_ONLY = "DRYRUN_AUDIT_LOG_ONLY"

class AdmissionRuleEvaluationModeEnum(str, Enum):
    EVALUATION_MODE_UNSPECIFIED = "EVALUATION_MODE_UNSPECIFIED"
    ALWAYS_ALLOW = "ALWAYS_ALLOW"
    REQUIRE_ATTESTATION = "REQUIRE_ATTESTATION"
    ALWAYS_DENY = "ALWAYS_DENY"


@dataclass_json
@dataclass
class AdmissionRule:
    enforcement_mode: Optional[AdmissionRuleEnforcementModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enforcementMode' }})
    evaluation_mode: Optional[AdmissionRuleEvaluationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluationMode' }})
    require_attestations_by: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requireAttestationsBy' }})
    
