package shared

type DNSResourceRecord struct {
	Data *string `json:"data"`
	Name *string `json:"name"`
	Type *string `json:"type"`
}
