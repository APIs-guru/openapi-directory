package shared

type FeatureSpecProvisionGoogleCaEnum string

const (
	FeatureSpecProvisionGoogleCaEnumGoogleCaProvisioningUnspecified FeatureSpecProvisionGoogleCaEnum = "GOOGLE_CA_PROVISIONING_UNSPECIFIED"
	FeatureSpecProvisionGoogleCaEnumDisabled                        FeatureSpecProvisionGoogleCaEnum = "DISABLED"
	FeatureSpecProvisionGoogleCaEnumEnabled                         FeatureSpecProvisionGoogleCaEnum = "ENABLED"
)

// FeatureSpec
// **Workload Certificate**: The Hub-wide input for the WorkloadCertificate feature.
type FeatureSpec struct {
	DefaultConfig     *MembershipSpec                   `json:"defaultConfig,omitempty"`
	ProvisionGoogleCa *FeatureSpecProvisionGoogleCaEnum `json:"provisionGoogleCa,omitempty"`
}
