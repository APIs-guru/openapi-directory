package shared

// BatchCreateContactsResponse
// If not successful, returns BatchCreateContactsErrorDetails which contains a list of errors for each invalid contact. The response to a request to create a batch of contacts.
type BatchCreateContactsResponse struct {
	CreatedPeople []PersonResponse `json:"createdPeople,omitempty"`
}
