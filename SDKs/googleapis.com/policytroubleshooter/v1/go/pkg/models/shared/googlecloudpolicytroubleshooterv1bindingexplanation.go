package shared

type GoogleCloudPolicytroubleshooterV1BindingExplanationAccessEnum string

const (
	GoogleCloudPolicytroubleshooterV1BindingExplanationAccessEnumAccessStateUnspecified GoogleCloudPolicytroubleshooterV1BindingExplanationAccessEnum = "ACCESS_STATE_UNSPECIFIED"
	GoogleCloudPolicytroubleshooterV1BindingExplanationAccessEnumGranted                GoogleCloudPolicytroubleshooterV1BindingExplanationAccessEnum = "GRANTED"
	GoogleCloudPolicytroubleshooterV1BindingExplanationAccessEnumNotGranted             GoogleCloudPolicytroubleshooterV1BindingExplanationAccessEnum = "NOT_GRANTED"
	GoogleCloudPolicytroubleshooterV1BindingExplanationAccessEnumUnknownConditional     GoogleCloudPolicytroubleshooterV1BindingExplanationAccessEnum = "UNKNOWN_CONDITIONAL"
	GoogleCloudPolicytroubleshooterV1BindingExplanationAccessEnumUnknownInfoDenied      GoogleCloudPolicytroubleshooterV1BindingExplanationAccessEnum = "UNKNOWN_INFO_DENIED"
)

type GoogleCloudPolicytroubleshooterV1BindingExplanationRelevanceEnum string

const (
	GoogleCloudPolicytroubleshooterV1BindingExplanationRelevanceEnumHeuristicRelevanceUnspecified GoogleCloudPolicytroubleshooterV1BindingExplanationRelevanceEnum = "HEURISTIC_RELEVANCE_UNSPECIFIED"
	GoogleCloudPolicytroubleshooterV1BindingExplanationRelevanceEnumNormal                        GoogleCloudPolicytroubleshooterV1BindingExplanationRelevanceEnum = "NORMAL"
	GoogleCloudPolicytroubleshooterV1BindingExplanationRelevanceEnumHigh                          GoogleCloudPolicytroubleshooterV1BindingExplanationRelevanceEnum = "HIGH"
)

type GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionEnum string

const (
	GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionEnumRolePermissionUnspecified       GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionEnum = "ROLE_PERMISSION_UNSPECIFIED"
	GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionEnumRolePermissionIncluded          GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionEnum = "ROLE_PERMISSION_INCLUDED"
	GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionEnumRolePermissionNotIncluded       GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionEnum = "ROLE_PERMISSION_NOT_INCLUDED"
	GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionEnumRolePermissionUnknownInfoDenied GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionEnum = "ROLE_PERMISSION_UNKNOWN_INFO_DENIED"
)

type GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionRelevanceEnum string

const (
	GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionRelevanceEnumHeuristicRelevanceUnspecified GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionRelevanceEnum = "HEURISTIC_RELEVANCE_UNSPECIFIED"
	GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionRelevanceEnumNormal                        GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionRelevanceEnum = "NORMAL"
	GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionRelevanceEnumHigh                          GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionRelevanceEnum = "HIGH"
)

// GoogleCloudPolicytroubleshooterV1BindingExplanation
// Details about how a binding in a policy affects a principal's ability to use a permission.
type GoogleCloudPolicytroubleshooterV1BindingExplanation struct {
	Access                  *GoogleCloudPolicytroubleshooterV1BindingExplanationAccessEnum                    `json:"access,omitempty"`
	Condition               *GoogleTypeExpr                                                                   `json:"condition,omitempty"`
	Memberships             map[string]GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembership `json:"memberships,omitempty"`
	Relevance               *GoogleCloudPolicytroubleshooterV1BindingExplanationRelevanceEnum                 `json:"relevance,omitempty"`
	Role                    *string                                                                           `json:"role,omitempty"`
	RolePermission          *GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionEnum            `json:"rolePermission,omitempty"`
	RolePermissionRelevance *GoogleCloudPolicytroubleshooterV1BindingExplanationRolePermissionRelevanceEnum   `json:"rolePermissionRelevance,omitempty"`
}
