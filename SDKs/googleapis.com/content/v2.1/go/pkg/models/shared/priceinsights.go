package shared

// PriceInsights
// Price Insights fields requested by the merchant in the query. Field values are only set if the merchant queries `PriceInsightsProductView`. https://support.google.com/merchants/answer/11916926
type PriceInsights struct {
	PredictedClicksChangeFraction                 *float64 `json:"predictedClicksChangeFraction,omitempty"`
	PredictedConversionsChangeFraction            *float64 `json:"predictedConversionsChangeFraction,omitempty"`
	PredictedGrossProfitChangeFraction            *float64 `json:"predictedGrossProfitChangeFraction,omitempty"`
	PredictedImpressionsChangeFraction            *float64 `json:"predictedImpressionsChangeFraction,omitempty"`
	PredictedMonthlyGrossProfitChangeCurrencyCode *string  `json:"predictedMonthlyGrossProfitChangeCurrencyCode,omitempty"`
	PredictedMonthlyGrossProfitChangeMicros       *string  `json:"predictedMonthlyGrossProfitChangeMicros,omitempty"`
	SuggestedPriceCurrencyCode                    *string  `json:"suggestedPriceCurrencyCode,omitempty"`
	SuggestedPriceMicros                          *string  `json:"suggestedPriceMicros,omitempty"`
}
