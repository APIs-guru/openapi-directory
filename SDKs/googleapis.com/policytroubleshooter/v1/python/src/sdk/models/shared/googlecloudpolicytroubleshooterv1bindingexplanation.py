from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googletypeexpr
from . import googlecloudpolicytroubleshooterv1bindingexplanationannotatedmembership

class GoogleCloudPolicytroubleshooterV1BindingExplanationAccessEnum(str, Enum):
    ACCESS_STATE_UNSPECIFIED = "ACCESS_STATE_UNSPECIFIED"
    GRANTED = "GRANTED"
    NOT_GRANTED = "NOT_GRANTED"
    UNKNOWN_CONDITIONAL = "UNKNOWN_CONDITIONAL"
    UNKNOWN_INFO_DENIED = "UNKNOWN_INFO_DENIED"

class GoogleCloudPolicytroubleshooterV1BindingExplanationRelevanceEnum(str, Enum):
    HEURISTIC_RELEVANCE_UNSPECIFIED = "HEURISTIC_RELEVANCE_UNSPECIFIED"
    NORMAL = "NORMAL"
    HIGH = "HIGH"

class GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionEnum(str, Enum):
    ROLE_PERMISSION_UNSPECIFIED = "ROLE_PERMISSION_UNSPECIFIED"
    ROLE_PERMISSION_INCLUDED = "ROLE_PERMISSION_INCLUDED"
    ROLE_PERMISSION_NOT_INCLUDED = "ROLE_PERMISSION_NOT_INCLUDED"
    ROLE_PERMISSION_UNKNOWN_INFO_DENIED = "ROLE_PERMISSION_UNKNOWN_INFO_DENIED"

class GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionRelevanceEnum(str, Enum):
    HEURISTIC_RELEVANCE_UNSPECIFIED = "HEURISTIC_RELEVANCE_UNSPECIFIED"
    NORMAL = "NORMAL"
    HIGH = "HIGH"


@dataclass_json
@dataclass
class GoogleCloudPolicytroubleshooterV1BindingExplanation:
    access: Optional[GoogleCloudPolicytroubleshooterV1BindingExplanationAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access' }})
    condition: Optional[googletypeexpr.GoogleTypeExpr] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    memberships: Optional[dict[str, googlecloudpolicytroubleshooterv1bindingexplanationannotatedmembership.GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembership]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memberships' }})
    relevance: Optional[GoogleCloudPolicytroubleshooterV1BindingExplanationRelevanceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relevance' }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    role_permission: Optional[GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rolePermission' }})
    role_permission_relevance: Optional[GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionRelevanceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rolePermissionRelevance' }})
    
