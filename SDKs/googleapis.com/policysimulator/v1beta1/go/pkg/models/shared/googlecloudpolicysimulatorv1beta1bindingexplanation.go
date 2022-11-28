package shared

type GoogleCloudPolicysimulatorV1beta1BindingExplanationAccessEnum string

const (
	GoogleCloudPolicysimulatorV1beta1BindingExplanationAccessEnumAccessStateUnspecified GoogleCloudPolicysimulatorV1beta1BindingExplanationAccessEnum = "ACCESS_STATE_UNSPECIFIED"
	GoogleCloudPolicysimulatorV1beta1BindingExplanationAccessEnumGranted                GoogleCloudPolicysimulatorV1beta1BindingExplanationAccessEnum = "GRANTED"
	GoogleCloudPolicysimulatorV1beta1BindingExplanationAccessEnumNotGranted             GoogleCloudPolicysimulatorV1beta1BindingExplanationAccessEnum = "NOT_GRANTED"
	GoogleCloudPolicysimulatorV1beta1BindingExplanationAccessEnumUnknownConditional     GoogleCloudPolicysimulatorV1beta1BindingExplanationAccessEnum = "UNKNOWN_CONDITIONAL"
	GoogleCloudPolicysimulatorV1beta1BindingExplanationAccessEnumUnknownInfoDenied      GoogleCloudPolicysimulatorV1beta1BindingExplanationAccessEnum = "UNKNOWN_INFO_DENIED"
)

type GoogleCloudPolicysimulatorV1beta1BindingExplanationRelevanceEnum string

const (
	GoogleCloudPolicysimulatorV1beta1BindingExplanationRelevanceEnumHeuristicRelevanceUnspecified GoogleCloudPolicysimulatorV1beta1BindingExplanationRelevanceEnum = "HEURISTIC_RELEVANCE_UNSPECIFIED"
	GoogleCloudPolicysimulatorV1beta1BindingExplanationRelevanceEnumNormal                        GoogleCloudPolicysimulatorV1beta1BindingExplanationRelevanceEnum = "NORMAL"
	GoogleCloudPolicysimulatorV1beta1BindingExplanationRelevanceEnumHigh                          GoogleCloudPolicysimulatorV1beta1BindingExplanationRelevanceEnum = "HIGH"
)

type GoogleCloudPolicysimulatorV1beta1BindingExplanationRolePermissionEnum string

const (
	GoogleCloudPolicysimulatorV1beta1BindingExplanationRolePermissionEnumRolePermissionUnspecified       GoogleCloudPolicysimulatorV1beta1BindingExplanationRolePermissionEnum = "ROLE_PERMISSION_UNSPECIFIED"
	GoogleCloudPolicysimulatorV1beta1BindingExplanationRolePermissionEnumRolePermissionIncluded          GoogleCloudPolicysimulatorV1beta1BindingExplanationRolePermissionEnum = "ROLE_PERMISSION_INCLUDED"
	GoogleCloudPolicysimulatorV1beta1BindingExplanationRolePermissionEnumRolePermissionNotIncluded       GoogleCloudPolicysimulatorV1beta1BindingExplanationRolePermissionEnum = "ROLE_PERMISSION_NOT_INCLUDED"
	GoogleCloudPolicysimulatorV1beta1BindingExplanationRolePermissionEnumRolePermissionUnknownInfoDenied GoogleCloudPolicysimulatorV1beta1BindingExplanationRolePermissionEnum = "ROLE_PERMISSION_UNKNOWN_INFO_DENIED"
)

type GoogleCloudPolicysimulatorV1beta1BindingExplanationRolePermissionRelevanceEnum string

const (
	GoogleCloudPolicysimulatorV1beta1BindingExplanationRolePermissionRelevanceEnumHeuristicRelevanceUnspecified GoogleCloudPolicysimulatorV1beta1BindingExplanationRolePermissionRelevanceEnum = "HEURISTIC_RELEVANCE_UNSPECIFIED"
	GoogleCloudPolicysimulatorV1beta1BindingExplanationRolePermissionRelevanceEnumNormal                        GoogleCloudPolicysimulatorV1beta1BindingExplanationRolePermissionRelevanceEnum = "NORMAL"
	GoogleCloudPolicysimulatorV1beta1BindingExplanationRolePermissionRelevanceEnumHigh                          GoogleCloudPolicysimulatorV1beta1BindingExplanationRolePermissionRelevanceEnum = "HIGH"
)

// GoogleCloudPolicysimulatorV1beta1BindingExplanation
// Details about how a binding in a policy affects a principal's ability to use a permission.
type GoogleCloudPolicysimulatorV1beta1BindingExplanation struct {
	Access                  *GoogleCloudPolicysimulatorV1beta1BindingExplanationAccessEnum                    `json:"access,omitempty"`
	Condition               *GoogleTypeExpr                                                                   `json:"condition,omitempty"`
	Memberships             map[string]GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembership `json:"memberships,omitempty"`
	Relevance               *GoogleCloudPolicysimulatorV1beta1BindingExplanationRelevanceEnum                 `json:"relevance,omitempty"`
	Role                    *string                                                                           `json:"role,omitempty"`
	RolePermission          *GoogleCloudPolicysimulatorV1beta1BindingExplanationRolePermissionEnum            `json:"rolePermission,omitempty"`
	RolePermissionRelevance *GoogleCloudPolicysimulatorV1beta1BindingExplanationRolePermissionRelevanceEnum   `json:"rolePermissionRelevance,omitempty"`
}
