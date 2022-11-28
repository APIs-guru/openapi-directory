package shared

// DNSSettings
// Defines the DNS configuration of a `Registration`, including name servers, DNSSEC, and glue records.
type DNSSettings struct {
	CustomDNS        *CustomDNS        `json:"customDns,omitempty"`
	GlueRecords      []GlueRecord      `json:"glueRecords,omitempty"`
	GoogleDomainsDNS *GoogleDomainsDNS `json:"googleDomainsDns,omitempty"`
}

// DNSSettingsInput
// Defines the DNS configuration of a `Registration`, including name servers, DNSSEC, and glue records.
type DNSSettingsInput struct {
	CustomDNS        *CustomDNS             `json:"customDns,omitempty"`
	GlueRecords      []GlueRecord           `json:"glueRecords,omitempty"`
	GoogleDomainsDNS *GoogleDomainsDNSInput `json:"googleDomainsDns,omitempty"`
}
