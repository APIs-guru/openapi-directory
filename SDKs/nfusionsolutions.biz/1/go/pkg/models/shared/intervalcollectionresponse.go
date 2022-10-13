package shared

type IntervalCollectionResponse struct {
	Data                   *IntervalCollection `json:"data"`
	Error                  *string             `json:"error"`
	RequestedCurrency      *string             `json:"requestedCurrency"`
	RequestedSymbol        *string             `json:"requestedSymbol"`
	RequestedUnitOfMeasure *string             `json:"requestedUnitOfMeasure"`
	Success                *bool               `json:"success"`
}
