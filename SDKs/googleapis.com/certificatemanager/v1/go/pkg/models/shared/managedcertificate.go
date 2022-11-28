package shared

type ManagedCertificateStateEnum string

const (
	ManagedCertificateStateEnumStateUnspecified ManagedCertificateStateEnum = "STATE_UNSPECIFIED"
	ManagedCertificateStateEnumProvisioning     ManagedCertificateStateEnum = "PROVISIONING"
	ManagedCertificateStateEnumFailed           ManagedCertificateStateEnum = "FAILED"
	ManagedCertificateStateEnumActive           ManagedCertificateStateEnum = "ACTIVE"
)

// ManagedCertificateInput
// Configuration and state of a Managed Certificate. Certificate Manager provisions and renews Managed Certificates automatically, for as long as it's authorized to do so.
type ManagedCertificateInput struct {
	DNSAuthorizations []string `json:"dnsAuthorizations,omitempty"`
	Domains           []string `json:"domains,omitempty"`
	IssuanceConfig    *string  `json:"issuanceConfig,omitempty"`
}

// ManagedCertificate
// Configuration and state of a Managed Certificate. Certificate Manager provisions and renews Managed Certificates automatically, for as long as it's authorized to do so.
type ManagedCertificate struct {
	AuthorizationAttemptInfo []AuthorizationAttemptInfo   `json:"authorizationAttemptInfo,omitempty"`
	DNSAuthorizations        []string                     `json:"dnsAuthorizations,omitempty"`
	Domains                  []string                     `json:"domains,omitempty"`
	IssuanceConfig           *string                      `json:"issuanceConfig,omitempty"`
	ProvisioningIssue        *ProvisioningIssue           `json:"provisioningIssue,omitempty"`
	State                    *ManagedCertificateStateEnum `json:"state,omitempty"`
}
