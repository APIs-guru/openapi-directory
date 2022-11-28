package shared

// CustomDNS
// Configuration for an arbitrary DNS provider.
type CustomDNS struct {
	DsRecords   []DsRecord `json:"dsRecords,omitempty"`
	NameServers []string   `json:"nameServers,omitempty"`
}
