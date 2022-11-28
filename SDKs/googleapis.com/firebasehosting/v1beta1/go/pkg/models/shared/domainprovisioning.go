package shared

type DomainProvisioningCertStatusEnum string

const (
	DomainProvisioningCertStatusEnumCertStatusUnspecified DomainProvisioningCertStatusEnum = "CERT_STATUS_UNSPECIFIED"
	DomainProvisioningCertStatusEnumCertPending           DomainProvisioningCertStatusEnum = "CERT_PENDING"
	DomainProvisioningCertStatusEnumCertMissing           DomainProvisioningCertStatusEnum = "CERT_MISSING"
	DomainProvisioningCertStatusEnumCertProcessing        DomainProvisioningCertStatusEnum = "CERT_PROCESSING"
	DomainProvisioningCertStatusEnumCertPropagating       DomainProvisioningCertStatusEnum = "CERT_PROPAGATING"
	DomainProvisioningCertStatusEnumCertActive            DomainProvisioningCertStatusEnum = "CERT_ACTIVE"
	DomainProvisioningCertStatusEnumCertError             DomainProvisioningCertStatusEnum = "CERT_ERROR"
)

type DomainProvisioningDNSStatusEnum string

const (
	DomainProvisioningDNSStatusEnumDNSStatusUnspecified DomainProvisioningDNSStatusEnum = "DNS_STATUS_UNSPECIFIED"
	DomainProvisioningDNSStatusEnumDNSPending           DomainProvisioningDNSStatusEnum = "DNS_PENDING"
	DomainProvisioningDNSStatusEnumDNSMissing           DomainProvisioningDNSStatusEnum = "DNS_MISSING"
	DomainProvisioningDNSStatusEnumDNSPartialMatch      DomainProvisioningDNSStatusEnum = "DNS_PARTIAL_MATCH"
	DomainProvisioningDNSStatusEnumDNSMatch             DomainProvisioningDNSStatusEnum = "DNS_MATCH"
	DomainProvisioningDNSStatusEnumDNSExtraneousMatch   DomainProvisioningDNSStatusEnum = "DNS_EXTRANEOUS_MATCH"
)

// DomainProvisioning
// The current certificate provisioning status information for a domain.
type DomainProvisioning struct {
	CertChallengeDiscoveredTxt []string                          `json:"certChallengeDiscoveredTxt,omitempty"`
	CertChallengeDNS           *CertDNSChallenge                 `json:"certChallengeDns,omitempty"`
	CertChallengeHTTP          *CertHTTPChallenge                `json:"certChallengeHttp,omitempty"`
	CertStatus                 *DomainProvisioningCertStatusEnum `json:"certStatus,omitempty"`
	DiscoveredIps              []string                          `json:"discoveredIps,omitempty"`
	DNSFetchTime               *string                           `json:"dnsFetchTime,omitempty"`
	DNSStatus                  *DomainProvisioningDNSStatusEnum  `json:"dnsStatus,omitempty"`
	ExpectedIps                []string                          `json:"expectedIps,omitempty"`
}
