package operations

import (
"openapi/pkg/models/shared")

type ChineseNameMatchBatchSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type ChineseNameMatchBatchRequest struct {
    Request *shared.BatchMatchPersonalFirstLastNameIn `request:"mediaType=application/json"`
    Security ChineseNameMatchBatchSecurity 
    
}

type ChineseNameMatchBatchResponse struct {
    BatchNameMatchedOut *shared.BatchNameMatchedOut 
    ContentType string 
    StatusCode int64 
    
}

