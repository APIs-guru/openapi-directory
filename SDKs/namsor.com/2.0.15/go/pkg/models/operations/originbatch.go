package operations

import (
"openapi/pkg/models/shared")

type OriginBatchSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type OriginBatchRequest struct {
    Request *shared.BatchFirstLastNameIn `request:"mediaType=application/json"`
    Security OriginBatchSecurity 
    
}

type OriginBatchResponse struct {
    BatchFirstLastNameOriginedOut *shared.BatchFirstLastNameOriginedOut 
    ContentType string 
    StatusCode int64 
    
}

