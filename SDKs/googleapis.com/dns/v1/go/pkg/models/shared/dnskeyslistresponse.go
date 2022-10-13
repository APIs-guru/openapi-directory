package shared

type DNSKeysListResponse struct {
	DNSKeys       []DNSKey        `json:"dnsKeys"`
	Header        *ResponseHeader `json:"header"`
	Kind          *string         `json:"kind"`
	NextPageToken *string         `json:"nextPageToken"`
}
