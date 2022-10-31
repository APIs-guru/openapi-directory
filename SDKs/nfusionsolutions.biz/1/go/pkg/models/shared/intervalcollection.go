package shared



type IntervalCollection struct {
    BaseCurrency *string `json:"baseCurrency,omitempty"`
    Intervals []Interval `json:"intervals,omitempty"`
    Name *string `json:"name,omitempty"`
    Symbol *string `json:"symbol,omitempty"`
    
}

