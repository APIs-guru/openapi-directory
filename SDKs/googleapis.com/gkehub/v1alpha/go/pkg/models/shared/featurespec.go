package shared

type FeatureSpecProvisionGoogleCaEnum string

const (
	FeatureSpecProvisionGoogleCaEnumGoogleCaProvisioningUnspecified FeatureSpecProvisionGoogleCaEnum = "GOOGLE_CA_PROVISIONING_UNSPECIFIED"
	FeatureSpecProvisionGoogleCaEnumDisabled                        FeatureSpecProvisionGoogleCaEnum = "DISABLED"
	FeatureSpecProvisionGoogleCaEnumEnabled                         FeatureSpecProvisionGoogleCaEnum = "ENABLED"
)

type FeatureSpec struct {
	DefaultConfig     *MembershipSpec                   `json:"defaultConfig"`
	ProvisionGoogleCa *FeatureSpecProvisionGoogleCaEnum `json:"provisionGoogleCa"`
}
