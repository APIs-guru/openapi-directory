package shared

// ListCryptoKeysResponse
// Response message for KeyManagementService.ListCryptoKeys.
type ListCryptoKeysResponse struct {
	CryptoKeys    []CryptoKey `json:"cryptoKeys,omitempty"`
	NextPageToken *string     `json:"nextPageToken,omitempty"`
	TotalSize     *int32      `json:"totalSize,omitempty"`
}
