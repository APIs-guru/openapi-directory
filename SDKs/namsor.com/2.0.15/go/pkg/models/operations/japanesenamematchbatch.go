package operations

import (
"openapi/pkg/models/shared")

type JapaneseNameMatchBatchSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type JapaneseNameMatchBatchRequest struct {
    Request *shared.BatchMatchPersonalFirstLastNameIn `request:"mediaType=application/json"`
    Security JapaneseNameMatchBatchSecurity 
    
}

type JapaneseNameMatchBatchResponse struct {
    BatchNameMatchedOut *shared.BatchNameMatchedOut 
    ContentType string 
    StatusCode int64 
    
}

