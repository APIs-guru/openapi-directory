package shared

type MembershipSpecCertificateManagementEnum string

const (
	MembershipSpecCertificateManagementEnumCertificateManagementUnspecified MembershipSpecCertificateManagementEnum = "CERTIFICATE_MANAGEMENT_UNSPECIFIED"
	MembershipSpecCertificateManagementEnumDisabled                         MembershipSpecCertificateManagementEnum = "DISABLED"
	MembershipSpecCertificateManagementEnumEnabled                          MembershipSpecCertificateManagementEnum = "ENABLED"
)

type MembershipSpec struct {
	CertificateManagement *MembershipSpecCertificateManagementEnum `json:"certificateManagement,omitempty"`
}
