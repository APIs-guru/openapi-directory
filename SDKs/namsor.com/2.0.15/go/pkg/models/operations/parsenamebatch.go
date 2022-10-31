package operations

import (
"openapi/pkg/models/shared")

type ParseNameBatchSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type ParseNameBatchRequest struct {
    Request *shared.BatchPersonalNameIn `request:"mediaType=application/json"`
    Security ParseNameBatchSecurity 
    
}

type ParseNameBatchResponse struct {
    BatchPersonalNameParsedOut *shared.BatchPersonalNameParsedOut 
    ContentType string 
    StatusCode int64 
    
}

