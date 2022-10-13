package shared

type BandedRange struct {
	BandedRangeID    *int32             `json:"bandedRangeId"`
	ColumnProperties *BandingProperties `json:"columnProperties"`
	Range            *GridRange         `json:"range"`
	RowProperties    *BandingProperties `json:"rowProperties"`
}
