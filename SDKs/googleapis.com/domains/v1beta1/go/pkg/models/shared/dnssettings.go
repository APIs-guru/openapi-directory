package shared

type DNSSettings struct {
	CustomDNS        *CustomDNS        `json:"customDns,omitempty"`
	GlueRecords      []GlueRecord      `json:"glueRecords,omitempty"`
	GoogleDomainsDNS *GoogleDomainsDNS `json:"googleDomainsDns,omitempty"`
}
