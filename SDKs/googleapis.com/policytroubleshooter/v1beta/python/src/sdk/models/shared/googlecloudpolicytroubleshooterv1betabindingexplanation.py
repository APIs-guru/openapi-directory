from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googletypeexpr
from . import googlecloudpolicytroubleshooterv1betabindingexplanationannotatedmembership

class GoogleCloudPolicytroubleshooterV1betaBindingExplanationAccessEnum(str, Enum):
    ACCESS_STATE_UNSPECIFIED = "ACCESS_STATE_UNSPECIFIED"
    GRANTED = "GRANTED"
    NOT_GRANTED = "NOT_GRANTED"
    UNKNOWN_CONDITIONAL = "UNKNOWN_CONDITIONAL"
    UNKNOWN_INFO_DENIED = "UNKNOWN_INFO_DENIED"

class GoogleCloudPolicytroubleshooterV1betaBindingExplanationRelevanceEnum(str, Enum):
    HEURISTIC_RELEVANCE_UNSPECIFIED = "HEURISTIC_RELEVANCE_UNSPECIFIED"
    NORMAL = "NORMAL"
    HIGH = "HIGH"

class GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionEnum(str, Enum):
    ROLE_PERMISSION_UNSPECIFIED = "ROLE_PERMISSION_UNSPECIFIED"
    ROLE_PERMISSION_INCLUDED = "ROLE_PERMISSION_INCLUDED"
    ROLE_PERMISSION_NOT_INCLUDED = "ROLE_PERMISSION_NOT_INCLUDED"
    ROLE_PERMISSION_UNKNOWN_INFO_DENIED = "ROLE_PERMISSION_UNKNOWN_INFO_DENIED"

class GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionRelevanceEnum(str, Enum):
    HEURISTIC_RELEVANCE_UNSPECIFIED = "HEURISTIC_RELEVANCE_UNSPECIFIED"
    NORMAL = "NORMAL"
    HIGH = "HIGH"


@dataclass_json
@dataclass
class GoogleCloudPolicytroubleshooterV1betaBindingExplanation:
    access: Optional[GoogleCloudPolicytroubleshooterV1betaBindingExplanationAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access' }})
    condition: Optional[googletypeexpr.GoogleTypeExpr] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    memberships: Optional[dict[str, googlecloudpolicytroubleshooterv1betabindingexplanationannotatedmembership.GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembership]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memberships' }})
    relevance: Optional[GoogleCloudPolicytroubleshooterV1betaBindingExplanationRelevanceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relevance' }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    role_permission: Optional[GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rolePermission' }})
    role_permission_relevance: Optional[GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionRelevanceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rolePermissionRelevance' }})
    
