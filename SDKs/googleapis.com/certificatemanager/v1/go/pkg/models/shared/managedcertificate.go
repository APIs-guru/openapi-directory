package shared

type ManagedCertificateStateEnum string

const (
	ManagedCertificateStateEnumStateUnspecified ManagedCertificateStateEnum = "STATE_UNSPECIFIED"
	ManagedCertificateStateEnumProvisioning     ManagedCertificateStateEnum = "PROVISIONING"
	ManagedCertificateStateEnumFailed           ManagedCertificateStateEnum = "FAILED"
	ManagedCertificateStateEnumActive           ManagedCertificateStateEnum = "ACTIVE"
)

type ManagedCertificate struct {
	AuthorizationAttemptInfo []AuthorizationAttemptInfo   `json:"authorizationAttemptInfo,omitempty"`
	DNSAuthorizations        []string                     `json:"dnsAuthorizations,omitempty"`
	Domains                  []string                     `json:"domains,omitempty"`
	IssuanceConfig           *string                      `json:"issuanceConfig,omitempty"`
	ProvisioningIssue        *ProvisioningIssue           `json:"provisioningIssue,omitempty"`
	State                    *ManagedCertificateStateEnum `json:"state,omitempty"`
}
