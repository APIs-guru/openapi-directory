package shared

type ListSecretVersionsResponse struct {
	NextPageToken *string         `json:"nextPageToken"`
	TotalSize     *int32          `json:"totalSize"`
	Versions      []SecretVersion `json:"versions"`
}
