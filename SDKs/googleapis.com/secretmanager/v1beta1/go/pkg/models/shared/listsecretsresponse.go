package shared

// ListSecretsResponse
// Response message for SecretManagerService.ListSecrets.
type ListSecretsResponse struct {
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	Secrets       []Secret `json:"secrets,omitempty"`
	TotalSize     *int32   `json:"totalSize,omitempty"`
}
