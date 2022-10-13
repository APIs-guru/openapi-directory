package shared

type ListCryptoKeysResponse struct {
	CryptoKeys    []CryptoKey `json:"cryptoKeys"`
	NextPageToken *string     `json:"nextPageToken"`
	TotalSize     *int32      `json:"totalSize"`
}
