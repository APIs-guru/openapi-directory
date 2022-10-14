package shared

type SQLACLEntry struct {
	ExpireTime *string `json:"expireTime,omitempty"`
	Label      *string `json:"label,omitempty"`
	TTL        *string `json:"ttl,omitempty"`
	Value      *string `json:"value,omitempty"`
}
