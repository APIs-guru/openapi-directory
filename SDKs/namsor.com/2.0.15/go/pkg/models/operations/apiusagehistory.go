package operations

import (
"openapi/pkg/models/shared")

type APIUsageHistorySecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type APIUsageHistoryRequest struct {
    Security APIUsageHistorySecurity 
    
}

type APIUsageHistoryResponse struct {
    APIUsageHistoryOut *shared.APIUsageHistoryOut 
    ContentType string 
    StatusCode int64 
    
}

