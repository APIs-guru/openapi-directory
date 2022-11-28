package shared

// BandedRange
// A banded (alternating colors) range in a sheet.
type BandedRange struct {
	BandedRangeID    *int32             `json:"bandedRangeId,omitempty"`
	ColumnProperties *BandingProperties `json:"columnProperties,omitempty"`
	Range            *GridRange         `json:"range,omitempty"`
	RowProperties    *BandingProperties `json:"rowProperties,omitempty"`
}
