package shared

type SQLACLEntry struct {
	ExpireTime *string `json:"expireTime"`
	Label      *string `json:"label"`
	TTL        *string `json:"ttl"`
	Value      *string `json:"value"`
}
