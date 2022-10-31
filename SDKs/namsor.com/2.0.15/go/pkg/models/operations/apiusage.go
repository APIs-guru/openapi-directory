package operations

import (
"openapi/pkg/models/shared")

type APIUsageSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type APIUsageRequest struct {
    Security APIUsageSecurity 
    
}

type APIUsageResponse struct {
    APIPeriodUsageOut *shared.APIPeriodUsageOut 
    ContentType string 
    StatusCode int64 
    
}

