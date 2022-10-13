package operations

type PostInventoryFinancialImapctForecastAccuracyHeaders struct {
	Token *string `header:"name=Token"`
}

type PostInventoryFinancialImapctForecastAccuracyRequest struct {
	Headers PostInventoryFinancialImapctForecastAccuracyHeaders
}

type PostInventoryFinancialImapctForecastAccuracyResponse struct {
	ContentType string
	StatusCode  int64
}
