package shared

type Distribution struct {
	MarketShare     *float64 `json:"marketShare"`
	MeasurementTime *string  `json:"measurementTime"`
}
