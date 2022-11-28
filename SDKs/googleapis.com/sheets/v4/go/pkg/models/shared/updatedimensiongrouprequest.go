package shared

// UpdateDimensionGroupRequest
// Updates the state of the specified group.
type UpdateDimensionGroupRequest struct {
	DimensionGroup *DimensionGroup `json:"dimensionGroup,omitempty"`
	Fields         *string         `json:"fields,omitempty"`
}
