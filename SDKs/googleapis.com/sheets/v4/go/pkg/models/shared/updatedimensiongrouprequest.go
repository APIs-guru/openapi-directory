package shared



type UpdateDimensionGroupRequest struct {
    DimensionGroup *DimensionGroup `json:"dimensionGroup,omitempty"`
    Fields *string `json:"fields,omitempty"`
    
}

