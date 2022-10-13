from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googletypeexpr
from . import googlecloudpolicysimulatorv1beta1bindingexplanationannotatedmembership

class GoogleCloudPolicysimulatorV1beta1BindingExplanationAccessEnum(str, Enum):
    ACCESS_STATE_UNSPECIFIED = "ACCESS_STATE_UNSPECIFIED"
    GRANTED = "GRANTED"
    NOT_GRANTED = "NOT_GRANTED"
    UNKNOWN_CONDITIONAL = "UNKNOWN_CONDITIONAL"
    UNKNOWN_INFO_DENIED = "UNKNOWN_INFO_DENIED"

class GoogleCloudPolicysimulatorV1beta1BindingExplanationRelevanceEnum(str, Enum):
    HEURISTIC_RELEVANCE_UNSPECIFIED = "HEURISTIC_RELEVANCE_UNSPECIFIED"
    NORMAL = "NORMAL"
    HIGH = "HIGH"

class GoogleCloudPolicysimulatorV1beta1BindingExplanationRolePermissionEnum(str, Enum):
    ROLE_PERMISSION_UNSPECIFIED = "ROLE_PERMISSION_UNSPECIFIED"
    ROLE_PERMISSION_INCLUDED = "ROLE_PERMISSION_INCLUDED"
    ROLE_PERMISSION_NOT_INCLUDED = "ROLE_PERMISSION_NOT_INCLUDED"
    ROLE_PERMISSION_UNKNOWN_INFO_DENIED = "ROLE_PERMISSION_UNKNOWN_INFO_DENIED"

class GoogleCloudPolicysimulatorV1beta1BindingExplanationRolePermissionRelevanceEnum(str, Enum):
    HEURISTIC_RELEVANCE_UNSPECIFIED = "HEURISTIC_RELEVANCE_UNSPECIFIED"
    NORMAL = "NORMAL"
    HIGH = "HIGH"


@dataclass_json
@dataclass
class GoogleCloudPolicysimulatorV1beta1BindingExplanation:
    access: Optional[GoogleCloudPolicysimulatorV1beta1BindingExplanationAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access' }})
    condition: Optional[googletypeexpr.GoogleTypeExpr] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    memberships: Optional[dict[str, googlecloudpolicysimulatorv1beta1bindingexplanationannotatedmembership.GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembership]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memberships' }})
    relevance: Optional[GoogleCloudPolicysimulatorV1beta1BindingExplanationRelevanceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relevance' }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    role_permission: Optional[GoogleCloudPolicysimulatorV1beta1BindingExplanationRolePermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rolePermission' }})
    role_permission_relevance: Optional[GoogleCloudPolicysimulatorV1beta1BindingExplanationRolePermissionRelevanceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rolePermissionRelevance' }})
    
