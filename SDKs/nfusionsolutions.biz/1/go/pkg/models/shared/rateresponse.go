package shared

type RateResponse struct {
	Data                   *Rate   `json:"data"`
	Error                  *string `json:"error"`
	RequestedCurrency      *string `json:"requestedCurrency"`
	RequestedSymbol        *string `json:"requestedSymbol"`
	RequestedUnitOfMeasure *string `json:"requestedUnitOfMeasure"`
	Success                *bool   `json:"success"`
}
