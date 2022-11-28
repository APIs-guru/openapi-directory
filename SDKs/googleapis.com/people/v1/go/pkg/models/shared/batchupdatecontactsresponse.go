package shared

// BatchUpdateContactsResponse
// If not successful, returns BatchUpdateContactsErrorDetails, a list of errors corresponding to each contact. The response to a request to update a batch of contacts.
type BatchUpdateContactsResponse struct {
	UpdateResult map[string]PersonResponse `json:"updateResult,omitempty"`
}
