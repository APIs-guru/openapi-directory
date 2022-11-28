package shared

// DeleteDimensionGroupRequest
// Deletes a group over the specified range by decrementing the depth of the dimensions in the range. For example, assume the sheet has a depth-1 group over B:E and a depth-2 group over C:D. Deleting a group over D:E leaves the sheet with a depth-1 group over B:D and a depth-2 group over C:C.
type DeleteDimensionGroupRequest struct {
	Range *DimensionRange `json:"range,omitempty"`
}
