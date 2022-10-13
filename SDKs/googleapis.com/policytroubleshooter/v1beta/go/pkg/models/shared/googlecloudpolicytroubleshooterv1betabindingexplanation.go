package shared

type GoogleCloudPolicytroubleshooterV1betaBindingExplanationAccessEnum string

const (
	GoogleCloudPolicytroubleshooterV1betaBindingExplanationAccessEnumAccessStateUnspecified GoogleCloudPolicytroubleshooterV1betaBindingExplanationAccessEnum = "ACCESS_STATE_UNSPECIFIED"
	GoogleCloudPolicytroubleshooterV1betaBindingExplanationAccessEnumGranted                GoogleCloudPolicytroubleshooterV1betaBindingExplanationAccessEnum = "GRANTED"
	GoogleCloudPolicytroubleshooterV1betaBindingExplanationAccessEnumNotGranted             GoogleCloudPolicytroubleshooterV1betaBindingExplanationAccessEnum = "NOT_GRANTED"
	GoogleCloudPolicytroubleshooterV1betaBindingExplanationAccessEnumUnknownConditional     GoogleCloudPolicytroubleshooterV1betaBindingExplanationAccessEnum = "UNKNOWN_CONDITIONAL"
	GoogleCloudPolicytroubleshooterV1betaBindingExplanationAccessEnumUnknownInfoDenied      GoogleCloudPolicytroubleshooterV1betaBindingExplanationAccessEnum = "UNKNOWN_INFO_DENIED"
)

type GoogleCloudPolicytroubleshooterV1betaBindingExplanationRelevanceEnum string

const (
	GoogleCloudPolicytroubleshooterV1betaBindingExplanationRelevanceEnumHeuristicRelevanceUnspecified GoogleCloudPolicytroubleshooterV1betaBindingExplanationRelevanceEnum = "HEURISTIC_RELEVANCE_UNSPECIFIED"
	GoogleCloudPolicytroubleshooterV1betaBindingExplanationRelevanceEnumNormal                        GoogleCloudPolicytroubleshooterV1betaBindingExplanationRelevanceEnum = "NORMAL"
	GoogleCloudPolicytroubleshooterV1betaBindingExplanationRelevanceEnumHigh                          GoogleCloudPolicytroubleshooterV1betaBindingExplanationRelevanceEnum = "HIGH"
)

type GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionEnum string

const (
	GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionEnumRolePermissionUnspecified       GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionEnum = "ROLE_PERMISSION_UNSPECIFIED"
	GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionEnumRolePermissionIncluded          GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionEnum = "ROLE_PERMISSION_INCLUDED"
	GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionEnumRolePermissionNotIncluded       GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionEnum = "ROLE_PERMISSION_NOT_INCLUDED"
	GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionEnumRolePermissionUnknownInfoDenied GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionEnum = "ROLE_PERMISSION_UNKNOWN_INFO_DENIED"
)

type GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionRelevanceEnum string

const (
	GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionRelevanceEnumHeuristicRelevanceUnspecified GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionRelevanceEnum = "HEURISTIC_RELEVANCE_UNSPECIFIED"
	GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionRelevanceEnumNormal                        GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionRelevanceEnum = "NORMAL"
	GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionRelevanceEnumHigh                          GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionRelevanceEnum = "HIGH"
)

type GoogleCloudPolicytroubleshooterV1betaBindingExplanation struct {
	Access                  *GoogleCloudPolicytroubleshooterV1betaBindingExplanationAccessEnum                    `json:"access"`
	Condition               *GoogleTypeExpr                                                                       `json:"condition"`
	Memberships             map[string]GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembership `json:"memberships"`
	Relevance               *GoogleCloudPolicytroubleshooterV1betaBindingExplanationRelevanceEnum                 `json:"relevance"`
	Role                    *string                                                                               `json:"role"`
	RolePermission          *GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionEnum            `json:"rolePermission"`
	RolePermissionRelevance *GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionRelevanceEnum   `json:"rolePermissionRelevance"`
}
