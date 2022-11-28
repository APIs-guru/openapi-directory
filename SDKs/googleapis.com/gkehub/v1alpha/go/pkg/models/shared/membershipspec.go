package shared

type MembershipSpecCertificateManagementEnum string

const (
	MembershipSpecCertificateManagementEnumCertificateManagementUnspecified MembershipSpecCertificateManagementEnum = "CERTIFICATE_MANAGEMENT_UNSPECIFIED"
	MembershipSpecCertificateManagementEnumDisabled                         MembershipSpecCertificateManagementEnum = "DISABLED"
	MembershipSpecCertificateManagementEnumEnabled                          MembershipSpecCertificateManagementEnum = "ENABLED"
)

// MembershipSpec
// **Workload Certificate**: The membership-specific input for WorkloadCertificate feature.
type MembershipSpec struct {
	CertificateManagement *MembershipSpecCertificateManagementEnum `json:"certificateManagement,omitempty"`
}
