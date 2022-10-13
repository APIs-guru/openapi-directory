package shared

type GoogleCloudPolicysimulatorV1BindingExplanationAccessEnum string

const (
	GoogleCloudPolicysimulatorV1BindingExplanationAccessEnumAccessStateUnspecified GoogleCloudPolicysimulatorV1BindingExplanationAccessEnum = "ACCESS_STATE_UNSPECIFIED"
	GoogleCloudPolicysimulatorV1BindingExplanationAccessEnumGranted                GoogleCloudPolicysimulatorV1BindingExplanationAccessEnum = "GRANTED"
	GoogleCloudPolicysimulatorV1BindingExplanationAccessEnumNotGranted             GoogleCloudPolicysimulatorV1BindingExplanationAccessEnum = "NOT_GRANTED"
	GoogleCloudPolicysimulatorV1BindingExplanationAccessEnumUnknownConditional     GoogleCloudPolicysimulatorV1BindingExplanationAccessEnum = "UNKNOWN_CONDITIONAL"
	GoogleCloudPolicysimulatorV1BindingExplanationAccessEnumUnknownInfoDenied      GoogleCloudPolicysimulatorV1BindingExplanationAccessEnum = "UNKNOWN_INFO_DENIED"
)

type GoogleCloudPolicysimulatorV1BindingExplanationRelevanceEnum string

const (
	GoogleCloudPolicysimulatorV1BindingExplanationRelevanceEnumHeuristicRelevanceUnspecified GoogleCloudPolicysimulatorV1BindingExplanationRelevanceEnum = "HEURISTIC_RELEVANCE_UNSPECIFIED"
	GoogleCloudPolicysimulatorV1BindingExplanationRelevanceEnumNormal                        GoogleCloudPolicysimulatorV1BindingExplanationRelevanceEnum = "NORMAL"
	GoogleCloudPolicysimulatorV1BindingExplanationRelevanceEnumHigh                          GoogleCloudPolicysimulatorV1BindingExplanationRelevanceEnum = "HIGH"
)

type GoogleCloudPolicysimulatorV1BindingExplanationRolePermissionEnum string

const (
	GoogleCloudPolicysimulatorV1BindingExplanationRolePermissionEnumRolePermissionUnspecified       GoogleCloudPolicysimulatorV1BindingExplanationRolePermissionEnum = "ROLE_PERMISSION_UNSPECIFIED"
	GoogleCloudPolicysimulatorV1BindingExplanationRolePermissionEnumRolePermissionIncluded          GoogleCloudPolicysimulatorV1BindingExplanationRolePermissionEnum = "ROLE_PERMISSION_INCLUDED"
	GoogleCloudPolicysimulatorV1BindingExplanationRolePermissionEnumRolePermissionNotIncluded       GoogleCloudPolicysimulatorV1BindingExplanationRolePermissionEnum = "ROLE_PERMISSION_NOT_INCLUDED"
	GoogleCloudPolicysimulatorV1BindingExplanationRolePermissionEnumRolePermissionUnknownInfoDenied GoogleCloudPolicysimulatorV1BindingExplanationRolePermissionEnum = "ROLE_PERMISSION_UNKNOWN_INFO_DENIED"
)

type GoogleCloudPolicysimulatorV1BindingExplanationRolePermissionRelevanceEnum string

const (
	GoogleCloudPolicysimulatorV1BindingExplanationRolePermissionRelevanceEnumHeuristicRelevanceUnspecified GoogleCloudPolicysimulatorV1BindingExplanationRolePermissionRelevanceEnum = "HEURISTIC_RELEVANCE_UNSPECIFIED"
	GoogleCloudPolicysimulatorV1BindingExplanationRolePermissionRelevanceEnumNormal                        GoogleCloudPolicysimulatorV1BindingExplanationRolePermissionRelevanceEnum = "NORMAL"
	GoogleCloudPolicysimulatorV1BindingExplanationRolePermissionRelevanceEnumHigh                          GoogleCloudPolicysimulatorV1BindingExplanationRolePermissionRelevanceEnum = "HIGH"
)

type GoogleCloudPolicysimulatorV1BindingExplanation struct {
	Access                  *GoogleCloudPolicysimulatorV1BindingExplanationAccessEnum                    `json:"access"`
	Condition               *GoogleTypeExpr                                                              `json:"condition"`
	Memberships             map[string]GoogleCloudPolicysimulatorV1BindingExplanationAnnotatedMembership `json:"memberships"`
	Relevance               *GoogleCloudPolicysimulatorV1BindingExplanationRelevanceEnum                 `json:"relevance"`
	Role                    *string                                                                      `json:"role"`
	RolePermission          *GoogleCloudPolicysimulatorV1BindingExplanationRolePermissionEnum            `json:"rolePermission"`
	RolePermissionRelevance *GoogleCloudPolicysimulatorV1BindingExplanationRolePermissionRelevanceEnum   `json:"rolePermissionRelevance"`
}
