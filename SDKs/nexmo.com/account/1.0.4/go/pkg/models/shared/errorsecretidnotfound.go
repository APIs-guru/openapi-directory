package shared

// ErrorSecretIDNotFound
// This secret ID was not recognised
type ErrorSecretIDNotFound struct {
	Detail   string `json:"detail"`
	Instance string `json:"instance"`
	Title    string `json:"title"`
	Type     string `json:"type"`
}
