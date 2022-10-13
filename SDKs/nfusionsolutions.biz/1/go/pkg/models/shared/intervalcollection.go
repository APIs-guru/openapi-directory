package shared

type IntervalCollection struct {
	BaseCurrency *string    `json:"baseCurrency"`
	Intervals    []Interval `json:"intervals"`
	Name         *string    `json:"name"`
	Symbol       *string    `json:"symbol"`
}
