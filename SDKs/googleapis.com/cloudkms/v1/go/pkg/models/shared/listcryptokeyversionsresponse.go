package shared

// ListCryptoKeyVersionsResponse
// Response message for KeyManagementService.ListCryptoKeyVersions.
type ListCryptoKeyVersionsResponse struct {
	CryptoKeyVersions []CryptoKeyVersion `json:"cryptoKeyVersions,omitempty"`
	NextPageToken     *string            `json:"nextPageToken,omitempty"`
	TotalSize         *int32             `json:"totalSize,omitempty"`
}
