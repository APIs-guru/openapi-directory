package shared

// BatchDeleteContactsRequest
// A request to delete a batch of existing contacts.
type BatchDeleteContactsRequest struct {
	ResourceNames []string `json:"resourceNames,omitempty"`
}
