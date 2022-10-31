package operations

import (
"openapi/pkg/models/shared")

type GenderFullBatchSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GenderFullBatchRequest struct {
    Request *shared.BatchPersonalNameIn `request:"mediaType=application/json"`
    Security GenderFullBatchSecurity 
    
}

type GenderFullBatchResponse struct {
    BatchPersonalNameGenderedOut *shared.BatchPersonalNameGenderedOut 
    ContentType string 
    StatusCode int64 
    
}

