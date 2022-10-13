package shared

type ManagedCertificateStateEnum string

const (
	ManagedCertificateStateEnumStateUnspecified ManagedCertificateStateEnum = "STATE_UNSPECIFIED"
	ManagedCertificateStateEnumProvisioning     ManagedCertificateStateEnum = "PROVISIONING"
	ManagedCertificateStateEnumFailed           ManagedCertificateStateEnum = "FAILED"
	ManagedCertificateStateEnumActive           ManagedCertificateStateEnum = "ACTIVE"
)

type ManagedCertificate struct {
	AuthorizationAttemptInfo []AuthorizationAttemptInfo   `json:"authorizationAttemptInfo"`
	DNSAuthorizations        []string                     `json:"dnsAuthorizations"`
	Domains                  []string                     `json:"domains"`
	IssuanceConfig           *string                      `json:"issuanceConfig"`
	ProvisioningIssue        *ProvisioningIssue           `json:"provisioningIssue"`
	State                    *ManagedCertificateStateEnum `json:"state"`
}
