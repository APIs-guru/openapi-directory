package shared

type DNSSettings struct {
	CustomDNS        *CustomDNS        `json:"customDns"`
	GlueRecords      []GlueRecord      `json:"glueRecords"`
	GoogleDomainsDNS *GoogleDomainsDNS `json:"googleDomainsDns"`
}
