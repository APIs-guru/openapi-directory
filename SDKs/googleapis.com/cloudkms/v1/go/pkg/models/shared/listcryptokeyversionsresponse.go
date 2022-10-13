package shared

type ListCryptoKeyVersionsResponse struct {
	CryptoKeyVersions []CryptoKeyVersion `json:"cryptoKeyVersions"`
	NextPageToken     *string            `json:"nextPageToken"`
	TotalSize         *int32             `json:"totalSize"`
}
