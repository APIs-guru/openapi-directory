package shared

type ListSecretVersionsResponse struct {
	NextPageToken *string         `json:"nextPageToken,omitempty"`
	TotalSize     *int32          `json:"totalSize,omitempty"`
	Versions      []SecretVersion `json:"versions,omitempty"`
}
