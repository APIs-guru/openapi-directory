package shared

type PivotGroupValueMetadata struct {
	Collapsed *bool          `json:"collapsed"`
	Value     *ExtendedValue `json:"value"`
}
