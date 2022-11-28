package shared

// DeleteContentRangeRequest
// Deletes content from the document.
type DeleteContentRangeRequest struct {
	Range *Range `json:"range,omitempty"`
}
