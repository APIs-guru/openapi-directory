package shared

// PivotGroupValueMetadata
// Metadata about a value in a pivot grouping.
type PivotGroupValueMetadata struct {
	Collapsed *bool          `json:"collapsed,omitempty"`
	Value     *ExtendedValue `json:"value,omitempty"`
}
