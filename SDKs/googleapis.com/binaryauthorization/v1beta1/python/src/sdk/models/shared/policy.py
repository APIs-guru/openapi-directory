from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import admissionwhitelistpattern
from . import admissionrule
from . import admissionrule
from . import admissionrule
from . import admissionrule
from . import admissionrule

class PolicyGlobalPolicyEvaluationModeEnum(str, Enum):
    GLOBAL_POLICY_EVALUATION_MODE_UNSPECIFIED = "GLOBAL_POLICY_EVALUATION_MODE_UNSPECIFIED"
    ENABLE = "ENABLE"
    DISABLE = "DISABLE"


@dataclass_json
@dataclass
class Policy:
    admission_whitelist_patterns: Optional[List[admissionwhitelistpattern.AdmissionWhitelistPattern]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'admissionWhitelistPatterns' }})
    cluster_admission_rules: Optional[dict[str, admissionrule.AdmissionRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterAdmissionRules' }})
    default_admission_rule: Optional[admissionrule.AdmissionRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultAdmissionRule' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    global_policy_evaluation_mode: Optional[PolicyGlobalPolicyEvaluationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'globalPolicyEvaluationMode' }})
    istio_service_identity_admission_rules: Optional[dict[str, admissionrule.AdmissionRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'istioServiceIdentityAdmissionRules' }})
    kubernetes_namespace_admission_rules: Optional[dict[str, admissionrule.AdmissionRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kubernetesNamespaceAdmissionRules' }})
    kubernetes_service_account_admission_rules: Optional[dict[str, admissionrule.AdmissionRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kubernetesServiceAccountAdmissionRules' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
