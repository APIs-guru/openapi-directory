package shared

// DimensionGroup
// A group over an interval of rows or columns on a sheet, which can contain or be contained within other groups. A group can be collapsed or expanded as a unit on the sheet.
type DimensionGroup struct {
	Collapsed *bool           `json:"collapsed,omitempty"`
	Depth     *int32          `json:"depth,omitempty"`
	Range     *DimensionRange `json:"range,omitempty"`
}
