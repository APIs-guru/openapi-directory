package shared

type ListServiceAccountKeysResponse struct {
	Keys []ServiceAccountKey `json:"keys,omitempty"`
}
