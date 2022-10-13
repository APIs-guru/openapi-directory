package shared

type ListSecretsResponse struct {
	NextPageToken *string  `json:"nextPageToken"`
	Secrets       []Secret `json:"secrets"`
	TotalSize     *int32   `json:"totalSize"`
}
