package operations

import (
	"openapi/pkg/models/shared"
)

type APIUsageHistoryAggregateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type APIUsageHistoryAggregateRequest struct {
	Security APIUsageHistoryAggregateSecurity
}

type APIUsageHistoryAggregateResponse struct {
	APIUsageAggregatedOut *shared.APIUsageAggregatedOut
	ContentType           string
	StatusCode            int64
}
