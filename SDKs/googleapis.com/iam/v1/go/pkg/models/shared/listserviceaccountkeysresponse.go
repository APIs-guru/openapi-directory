package shared

// ListServiceAccountKeysResponse
// The service account keys list response.
type ListServiceAccountKeysResponse struct {
	Keys []ServiceAccountKey `json:"keys,omitempty"`
}
