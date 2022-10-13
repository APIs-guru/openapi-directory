package shared

type Detection struct {
	Binary              *string  `json:"binary"`
	PercentPagesMatched *float64 `json:"percentPagesMatched"`
}
