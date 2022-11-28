package shared

// ErrorAPIKeyNotFound
// This API key was not recognised
type ErrorAPIKeyNotFound struct {
	Detail   string `json:"detail"`
	Instance string `json:"instance"`
	Title    string `json:"title"`
	Type     string `json:"type"`
}
