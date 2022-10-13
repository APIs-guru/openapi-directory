package shared

type DNSRecordSet struct {
	Data   []string `json:"data"`
	Domain *string  `json:"domain"`
	TTL    *string  `json:"ttl"`
	Type   *string  `json:"type"`
}
