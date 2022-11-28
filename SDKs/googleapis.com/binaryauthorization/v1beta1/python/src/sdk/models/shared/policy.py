from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PolicyGlobalPolicyEvaluationModeEnum(str, Enum):
    GLOBAL_POLICY_EVALUATION_MODE_UNSPECIFIED = "GLOBAL_POLICY_EVALUATION_MODE_UNSPECIFIED"
    ENABLE = "ENABLE"
    DISABLE = "DISABLE"


@dataclass_json
@dataclass
class Policy:
    r"""Policy
    A policy for Binary Authorization.
    """
    
    admission_whitelist_patterns: Optional[List[AdmissionWhitelistPattern]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('admissionWhitelistPatterns') }})
    cluster_admission_rules: Optional[dict[str, AdmissionRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterAdmissionRules') }})
    default_admission_rule: Optional[AdmissionRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultAdmissionRule') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    global_policy_evaluation_mode: Optional[PolicyGlobalPolicyEvaluationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('globalPolicyEvaluationMode') }})
    istio_service_identity_admission_rules: Optional[dict[str, AdmissionRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('istioServiceIdentityAdmissionRules') }})
    kubernetes_namespace_admission_rules: Optional[dict[str, AdmissionRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kubernetesNamespaceAdmissionRules') }})
    kubernetes_service_account_admission_rules: Optional[dict[str, AdmissionRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kubernetesServiceAccountAdmissionRules') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
