package shared

// BatchGetContactGroupsResponse
// The response to a batch get contact groups request.
type BatchGetContactGroupsResponse struct {
	Responses []ContactGroupResponse `json:"responses,omitempty"`
}
