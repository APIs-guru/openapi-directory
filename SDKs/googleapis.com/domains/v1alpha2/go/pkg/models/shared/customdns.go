package shared

type CustomDNS struct {
	DsRecords   []DsRecord `json:"dsRecords"`
	NameServers []string   `json:"nameServers"`
}
