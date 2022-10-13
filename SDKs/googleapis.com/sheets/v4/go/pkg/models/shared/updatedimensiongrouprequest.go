package shared

type UpdateDimensionGroupRequest struct {
	DimensionGroup *DimensionGroup `json:"dimensionGroup"`
	Fields         *string         `json:"fields"`
}
