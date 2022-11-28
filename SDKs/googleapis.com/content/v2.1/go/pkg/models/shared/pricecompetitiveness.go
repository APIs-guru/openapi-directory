package shared

// PriceCompetitiveness
// Price Competitiveness fields requested by the merchant in the query. Field values are only set if the merchant queries `PriceCompetitivenessProductView`. https://support.google.com/merchants/answer/9626903
type PriceCompetitiveness struct {
	BenchmarkPriceCurrencyCode *string `json:"benchmarkPriceCurrencyCode,omitempty"`
	BenchmarkPriceMicros       *string `json:"benchmarkPriceMicros,omitempty"`
	CountryCode                *string `json:"countryCode,omitempty"`
}
