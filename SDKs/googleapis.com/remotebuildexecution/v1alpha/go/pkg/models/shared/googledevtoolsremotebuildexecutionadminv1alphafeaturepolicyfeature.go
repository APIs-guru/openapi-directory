package shared

type GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum string

const (
	GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnumPolicyUnspecified GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum = "POLICY_UNSPECIFIED"
	GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnumAllowed           GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum = "ALLOWED"
	GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnumForbidden         GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum = "FORBIDDEN"
	GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnumRestricted        GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum = "RESTRICTED"
)

// GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature
// Defines whether a feature can be used or what values are accepted.
type GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature struct {
	AllowedValues []string                                                                      `json:"allowedValues,omitempty"`
	Policy        *GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum `json:"policy,omitempty"`
}
